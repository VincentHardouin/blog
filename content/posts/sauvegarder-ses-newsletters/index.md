---
title: "Sauvegarder ses Newsletters"
date: 2023-11-07T12:30:56+01:00
draft: false
---

Je suis abonné à de nombreuses newsletters qui fournissent ce contenu exclusivement par e-mail.
Craignant leurs pertes et voulant facilement les retrouver dans
mon [second cerveau](https://fortelabs.com/blog/basboverview/) : Obsidian, j'ai cherché une solution pour récupérer le
contenu des mails et les sauvegarder en markdown.

En regardant rapidement, je n'ai pas trouvé de solution pour faire ce que je souhaitais.
J'ai par conséquent voulu résoudre ce problème moi-même.

Le plus long aura été de choisir une librairie JavaScript pour se connecter à un serveur IMAP.
J'ai créé un package npm pour récupérer les e-mails depuis un expéditeur sur un serveur IMAP, les
convertir en Markdown et les enregistrer à l'endroit voulu.

## Utilisation

- Créer un fichier d'environnement contenant les variables suivantes :

```python
IMAP_HOST=<imap host>
IMAP_PORT=<imap port>
IMAP_USERNAME=<imap username>
IMAP_PASSWORD=<imap password>
```

- Utiliser le package comme suit :

```bash
npx email-backup --envFile <path to env file> --from <expeditor> --output <output directory>
```

## Conclusion

Désormais, je peux faire tourner des crons pour automatiser les sauvegardes des newsletters et pouvoir chercher dedans
facilement grâce à mon second cerveau.