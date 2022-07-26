---
title: "Projet - Comptrain WOD history"
seoImageUrl: https://opengraph.vincenthardouin.dev/cards/Projet - Comptrain WOD history
date: 2022-07-12T11:07:00+02:00
draft: false
---

## Introduction

J'ai récemment créé un projet pour historiser tous les WOD proposés par [Comptrain](https://comptrain.co/).

La programmation de Comptrain est l'une des programmations de Crossfit les plus reconnues dans son milieu,
notamment grâce à la renommée de son créateur [Ben Bergeron](https://benbergeron.com/about/)
qui a entre autres entrainé Mathew Fraser 5 fois vainqueur des CrossFit Games.

L'équipe de Comptrain propose une programmation gratuite. Elle est constituée d'un WOD tous les jours de la semaine
sauf le jeudi et le dimanche, qui sont des "REST DAY".

Cependant, l'historique des WODS n'est pas disponible.
Ce qui devient problématique quand vous souhaitez vous entrainer le jeudi et/ou le dimanche
et que vous n'avez pas pris une capture d'écran la veille. Vous vous retrouvez sans entrainement
et surtout vous n'allez pas suivre la programmation.

## Projet

À force de subir ce problème, j'ai décidé d'historiser les WODs en les enregistrant dans une
base de données.

Je suis parti sur une architecture contenant **une API** et un site statique.

L'API a comme rôle :

- de récupérer grâce à un [CRON](https://en.wikipedia.org/wiki/Cron) les WODs
- fournir un endpoint permettant de récupérer tous les WODs

Le **site statique** quant à lui doit appeler l'endpoint et afficher tous les WODs.

La stack de l'API se compose de :

- [Fastify](https://www.fastify.io/) comme serveur NodeJS, que je trouve pratique et simple d'utilisation.
- [Prisma](https://www.prisma.io/) comme ORM. J'ai choisi ce dernier, car je ne le connaissais pas et que j'en avais
  entendu du bien. Naturellement, j'ai voulu l'essayer. Il s'avère que pour l'usage que j'en fais, je ne l'ai pas essayé
  dans ses retranchements.
- [PostgreSQL](https://www.postgresql.org/) comme base de données.

Enfin, pour le site statique, je suis parti sur une application [NuxtJS](https://nuxtjs.org/), qui permet la
génération statique du site.

Pour l'hébergement, nous nous retrouvons avec l'API qui tourne sur mon VPS et le site statique hébergé sur GitHub Pages.
La génération du site est déclenchée chaque jour grâce à une GitHub Action
via [un event schedule](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule)

La solution fonctionne, la base comporte désormais 180 WODs, mais plusieurs éléments peuvent être améliorés.

## Changement d'architecture

Nous avons dans cette configuration une base de données et une API qui tourne 24h/24 dans l'attente d'une
insertion et une lecture de toute la table tous les jours. Cela **consomme des ressources inutilement**.

Nous pouvons alors nous demander si cela convient avec les besoins futurs.

### Perspective d'évolution

#### Volumétrie

Intéressons-nous à la volumétrie de la base de données.
Il y a moins de 365 WODs/an : **365 wods/an * 100 ans = 36 500 wods**.
Nous pouvons dire que la volumétrie globale n'excédera jamais les 100 000 éléments.

#### Amélioration

Ensuite, l'unique amélioration que j'envisage est la recherche par mouvements (squats, push-ups, pull-ups, …) pour
choisir d'en avoir certains et d'autres non.

En connaissant cette volumétrie et l'amélioration que je souhaite faire, nous nous rendons compte que n'importe quelle
base de données et/ou langage est capable de répondre à ces besoins.

### Déroulement

Un dimanche, j'ai fait le choix de réduire toute cette consommation.

L'idée que j'ai est de retirer la dépendance à mon VPS et que tout soit directement hébergé dans le repository
GitHub.

Pour cela, il me fallait changer de base de données et changer la façon dont les données étaient récupérées au moment de
la génération du site statique.

### Réalisation

#### Migration de la base de données

Dans un premier temps, j'ai migré de PostgreSQL vers SQLite, une base de données bien plus légère comme son nom
l'indique. Les avantages de SQLite sont les suivants :

- très léger
- la base de données est stockée directement dans un fichier, ce qui va dans l'optique d'être stocké dans le repository
- un connecteur intégré à Prisma existe, ce qui me facilite la migration

Pour faire la migration :

1. Exporter la table dans un fichier CSV :

```sql
COPY workouts TO 'tmp/workouts_db.csv' DELIMITER ',' CSV HEADER;
```

2. Importer la table dans SQLite :

```shell
.import workouts_db.csv workouts
```

Du côté de Prisma, comme indiqué
dans [la documentation](https://www.prisma.io/docs/concepts/components/prisma-migrate/prisma-migrate-limitations-issues) :

1. Dans le fichier `schema.prisma`, il faut changer le provider et l'url.
2. Supprimer le dossier `prisma/migrations`
3. Rejouer les migrations avec `prisma migrate dev`

Cependant, lorsque j'ai voulu récupérer les données via Prisma, cela ne fonctionnait pas.

```shell
node -p "const { PrismaClient } = require('@prisma/client'); 
new PrismaClient()
  .workout
  .findMany({ select: { title: true, createdAt: true }})
  .then(console.log);"
```

L'erreur en question :

```shell
Inconsistent column data: Conversion failed: input contains invalid characters
```

Je me suis alors dit que le problème venait du format des dates. Pour vérifier cela, j'ai d'abord demandé les WODs sans
la date de création.

```shell
node -p "const { PrismaClient } = require('@prisma/client'); 
new PrismaClient()
  .workout
  .findMany({ select: { title: true }})
  .then(console.log);"
```

Là je constate que ça fonctionne.

En effet, les dates étaient sous le format [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
(ex: 2022-01-07 14:43:00.432).
Seulement, en essayant d'insérer des données à l'aide de Prisma, nous pouvons voir que
Prisma insère des dates sous le format [UNIX Epoch](https://en.wikipedia.org/wiki/Unix_time) (ex: 1641566580) :

```shell
node -p "const { PrismaClient } = require('@prisma/client'); 
new PrismaClient()
  .workout
  .create({ 
    data: { title: 'test', content: ''},
    select: { createdAt: true }
  })
  .then(console.log);"
```

```shell
{ createdAt: 2022-07-17T15:51:05.791Z }
```

Et en base nous retrouvons :

```sql
select "createdAt" from workouts order by id desc limit 1;

1658073065791
```

Il m'a alors suffi d'importer les données dans une table temporaire puis de les importer dans la table finale en
convertissant les dates :

1. Je supprime la base précédemment créée :

```sql
delete from workouts;
```

2. Je réimporte les données dans une table temporaire

```sql
.import workouts_db.csv "workouts-tmp"
```

3. J'insère les données dans la table `workouts` en me basant sur la table `workouts_temp` mais en convertissant les
   dates :

```sql
insert into workouts (id, title, content, createdAt, updatedAt) 
select id, title, content, strftime('%s',createdAt), strftime('%s', updatedAt) from "workouts-tmp";
```

4. Je supprime la table temporaire

```sql
drop table "workouts-tmp";
```

Nous avons désormais migré notre base de PostgreSQL vers SQLite, nous pouvons maintenant inclure notre base dans le
repository.

#### Migration de l'API

Pour ce qui est de l'API, au lieu qu'elle tourne en permanence, j'ai décidé de la lancer uniquement au moment où le site
se génère.

Je n'ai pas
utilisé [les services des GitHub Actions](https://docs.github.com/en/actions/using-containerized-services/about-service-containers)
étant limités à des images Docker dont je n'ai pas envie dans mon idée de moins de dépendance possible.

Je me suis tourné vers la modification de la génération du site statique : pour ajouter le lancement de l'API dans un
processus en tâche de fond.

Voilà le résultat :

```
(cd api && npm start &); cd webapp && npm run generate
```

Vous pouvez trouver la GitHub Action complète
ici : https://github.com/VincentHardouin/comptrain-wod-history/blob/main/.github/workflows/deploy.yml

Grâce à ces deux étapes nous n'avons plus d'API et de base de données qui tournent en permanence.
L'hébergement et le déploiement dépendent désormais d'uniquement GitHub.

## Conclusion

Face à cette problématique d'historisation des WODs de Comptrain,
je propose donc [ce projet en solution](https://wods.vincenthardouin.dev/).
Nous avons pu voir qu'avec un peu de remise en question la solution ne me coûte désormais plus d'argent et elle peut
être utilisée par tout le monde.
Le code source est disponible à l'adresse
suivante : [https://github.com/VincentHardouin/comptrain-wod-history](https://github.com/VincentHardouin/comptrain-wod-history)
.

Nous pouvons aussi imaginer de nous passer de la base de données en nous basant sur un fichier JSON.
Pour ce qui est de l'API, nous aurions pu
utiliser [la solution de NuxtJS avec les servers](https://v3.nuxtjs.org/guide/features/server-routes), mais je ne suis
pas à l'aise avec ce couplage fort avec une solution.
