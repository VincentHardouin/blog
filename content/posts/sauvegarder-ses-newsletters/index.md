---
title: "Sauvegarder ses Newsletters"
date: 2023-11-07T12:30:56+01:00
draft: true
---

Je suis abonné à de nombreuses newsletters qui fournissent ce contenu exclusivement par e-mail.
Craignant leurs pertes et voulant facilement les retrouver dans
mon [second cerveau](https://fortelabs.com/blog/basboverview/) : Obsidian, j'ai cherché une solution pour récupérer le
contenu des mails et les sauvegarder en markdown.

En regardant rapidement, je n'ai pas trouvé de solution pour faire ce que je souhaitais.
J'ai par conséquent voulu résoudre ce problème moi-même.

Le plus long aura été de choisir une librairie JavaScript pour se connecter à un serveur IMAP
J'ai créé un package npm pour récupérer les e-mails depuis un expéditeur sur un serveur IMAP, les
convertir en Markdown et les enregistrer à l'endroit voulu.

## Utilisation

- Créer un fichier d'environnement contenant les variables suivantes :

```env
IMAP_HOST=<imap host>
IMAP_PORT=<imap port>
IMAP_USERNAME=<imap username>
IMAP_PASSWORD=<imap password>
```

- Utiliser le package comme suit :

```bash
npx email-backup --envFile <path to env file> --from <expeditor> --output <output directory>
```

## Ressources

C'est une excellente idée d'écrire un article sur la sauvegarde des newsletters, car de nombreuses personnes font face
au même problème de perte de contenu exclusif. Voici quelques questions auxquelles vous pourriez répondre dans votre
article pour le rendre plus informatif et utile aux lecteurs :

1. **Pourquoi avez-vous décidé de créer un package npm pour sauvegarder vos newsletters ?** Quels sont les avantages de
   cette approche par rapport à d'autres méthodes de sauvegarde ?

2. **Quelles sont les étapes nécessaires pour utiliser votre package npm ?** Pouvez-vous fournir un guide étape par
   étape pour les utilisateurs qui souhaitent l'essayer ?

3. **Comment fonctionne votre package npm pour sauvegarder les newsletters ?** Pouvez-vous expliquer la technologie
   sous-jacente et les processus impliqués ?

4. **Quels types de newsletters peuvent être sauvegardés à l'aide de votre package npm ?** Y a-t-il des limitations à
   prendre en compte ?

5. **Comment assurez-vous la sécurité des données sauvegardées ?** Les utilisateurs doivent-ils s'inquiéter de la
   confidentialité de leurs newsletters ?

6. **Existe-t-il des fonctionnalités avancées ou des options de personnalisation pour les utilisateurs avancés ?**
   Comment peuvent-ils tirer le meilleur parti de votre package ?

7. **Pouvez-vous partager des cas d'utilisation réels où votre package npm a été particulièrement utile pour sauvegarder
   des newsletters ?**

8. **Comment les utilisateurs peuvent-ils contribuer au développement de votre package npm ?** Acceptez-vous des
   contributions externes ?

9. **Y a-t-il des alternatives à votre package npm pour sauvegarder des newsletters, et comment se compare-t-il à ces
   alternatives en termes de fonctionnalités, de facilité d'utilisation et de performance ?**

10. **Quels sont les avantages de la sauvegarde de newsletters, en général ?** Comment cela peut-il aider les gens à
    mieux gérer leur contenu exclusif ?

En ce qui concerne le titre de l'article et les suggestions SEO, voici quelques options :

1. "Sauvegarder ses newsletters : ne perdez plus jamais de contenu exclusif"
2. "Newsletter Saver : Comment préserver vos contenus exclusifs en toute simplicité"
3. "La solution ultime pour conserver vos newsletters : un package npm"
4. "Votre contenu exclusif, à portée de clic : un guide pour sauvegarder vos newsletters"
5. "Gardez le contrôle sur vos newsletters : un package npm pour une conservation efficace"

N'oubliez pas de choisir un titre qui reflète le contenu de votre article et qui soit informatif pour les lecteurs tout
en étant optimisé pour les moteurs de recherche.

## WHY :

- Pourquoi je veux partager cette information ?
- Pourquoi je veux que les gens lisent cet article ?
- Pourquoi je me suis fait cette réflexion ?

## HOW

- Comment j'ai fait pour résoudre ce problème ? Créer un package

## WHAT

- Qu'est-ce que j'ai fait ?
    - Concrètement : JS 