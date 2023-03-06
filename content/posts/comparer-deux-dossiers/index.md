---
title: "Comparer deux dossiers en ligne de commande"
seoImageUrl: https://opengraph.vincenthardouin.dev/cards/Comparer deux dossiers
date: 2022-08-02T21:07:00+02:00
draft: false
---

Parfois, nous pouvons avoir besoin de comparer le contenu de deux dossiers et éventuellement de leurs sous-dossiers,
sans
comparer leur contenu, mais uniquement leur nom.

Si vous souhaitez comparer le contenu des fichiers, vous pouvez
consulter [l'article de Jérémy Buget qui traite le sujet.](https://jbuget.fr/posts/techniques-pour-fusionner-deux-versions-d-un-projet-shopify-grace-a-git/)

## 1er cas : comparer deux dossiers sans sous-dossiers

Pour ce faire, j'en suis arrivé à la commande suivante :

```shell
diff <(ls dir1) <(ls dir2)
```

Ou encore pour avoir un autre affichage du diff :

```shell
diff --unified <(ls dir1) <(ls dir2)
```

Dans cette commande, nous pouvons y trouver `<()`.
Il s'agit
du [Process Substitution](https://www.gnu.org/software/bash/manual/html_node/Process-Substitution.html#Process-Substitution)
qui permet d'éviter de stocker le résultat d'une commande dans un fichier temporaire pour s'en servir ensuite.

Cela réduit considérablement le nombre de commandes, nous nous retrouvons avec les commandes du dessus au lieu de :

```shell
ls dir1 > tmp_dir1.txt
ls dir2 > tmp_dir2.txt
diff tmp_dir1.txt tmp_dir2.txt
rm tmp_dir1.txt tmp_dir2.txt
```

Revenons à nos premières commandes en analysant le résultat de celles-ci.

Pour les exemples suivants, j'ai créé deux dossiers :

```shell
❯ tree
.
├── dir1
│   ├── bar.html
│   ├── foo.html
│   ├── index.html
│   └── waldo
│       └── garply.html
└── dir2
    ├── corge.html
    ├── foo.html
    └── index.html

4 directories, 7 files
```

Nous pouvons donc voir que `foo.html` et `index.html` sont présents dans les deux dossiers, `bar.html`
et `waldo/garply.html` uniquement dans le premier.

En lançant ces commandes, nous obtenons ce résultat :

```shell
❯ diff <(ls dir1) <(ls dir2)
1c1
< bar.html
---
> corge.html
4d3
< waldo
```

Cette commande renvoie uniquement les différences entre les deux dossiers.

```shell
❯ diff --unified <(ls dir1) <(ls dir2)
--- /dev/fd/11	2023-03-06 18:33:47
+++ /dev/fd/12	2023-03-06 18:33:47
@@ -1,4 +1,3 @@
-bar.html
+corge.html
 foo.html
 index.html
-waldo
```

Celle-ci, nous montre un diff façon git.

Ces commandes peuvent être suffisantes, mais nous pouvons aller plus loin et répondre à plus de cas d'usage avec la
commande `comm`.

Elle nous permet par exemple de voir uniquement les fichiers présents et/ou manquants dans un des dossiers.

Voyons voir le résultat de cette commande sans option :

```shell
❯ comm <(ls dir1) <(ls dir2)
bar.html
	corge.html
		foo.html
		index.html
waldo
```

Nous pouvons distinguer 3 colonnes séparées par des tabulations :

- La première correspond au fichier présent que dans le premier dossier
- La deuxième, uniquement dans le second
- La troisième, les fichiers en commun

Nous nous retrouvons à mon sens avec un diff plus explicite.

Attention, il faut que les fichiers passés en paramètres soient triés par ordre alphabétique pour que la commande
fonctionne correctement.

Maintenant que nous avons vu l'usage basique, nous pouvons utiliser les options.
Nous pouvons afficher des colonnes spécifiques grâce à l'option `-` suivi
des numéros de colonne à ne pas afficher.

Exemple :

- Afficher uniquement les fichiers en commun :

```shell
❯ comm -12 <(ls dir1) <(ls dir2)
foo.html
index.html
```

- Afficher uniquement les fichiers manquants dans le deuxième dossier :

```shell
❯ comm -23 <(ls dir1) <(ls dir2)
bar.html
waldo
```

## 2ème cas : comparer deux dossiers avec des sous-dossiers

Pour ce cas, nous allons utiliser la commande `diff` avec l'option `-r` qui permet de comparer récursivement les
dossiers :

```shell
❯ diff -r dir1 dir2
Only in dir1: bar.html
Only in dir2: corge.html
Only in dir1: waldo
```

Cette commande nous permet de voir les différences entre les deux dossiers, mais nous ne pouvons pas voir les fichiers
des sous-dossiers manquants.

Pour cela, nous allons utiliser la commande `find` qui, en plus de pouvoir chercher un fichier, permet de lister les
fichiers d'un dossier et de ses sous-dossiers.

Utilisée seule, elle donne :

```shell
❯ find dir1
dir1
dir1/index.html
dir1/bar.html
dir1/foo.html
dir1/waldo
dir1/waldo/garply.html
```

Comme nous pouvons le voir, elle nous donne le chemin complet des fichiers, ce qui n'est pas très pratique pour la
suite. Nous utiliserons en plus la commande `sed` qui permet de remplacer une chaîne de caractères pour ne pas avoir le
nom du dossier dans lequel nous cherchons.

```shell
❯ find dir1 | sed 's/dir1//g'

/index.html
/bar.html
/foo.html
/waldo
/waldo/garply.html
```

Nous obtenons donc le résultat que nous voulons pour pouvoir utiliser la commande `comm`.

```shell
❯ comm <(find dir1 | sed  's/dir1//g' | sort) <(find dir2 | sed 's/dir2//g' | sort)

/bar.html
	/corge.html
		/foo.html
		/index.html
/waldo
/waldo/garply.html
```

## Conclusion

Nous avons vu comment comparer deux dossiers en ligne de commande, avec ou sans sous-dossiers.
L'usage de comm nous permet, je trouve, d'avoir un affichage plus explicite que celui de diff et de répondre à plus de
cas d'usage.

Si vous souhaitez voir un cas d'usage de ces
commandes [vous pouvez consulter cette Pull Request](https://github.com/1024pix/pix-site/pull/395) où cela m'a été
utile.
