---
title: "Pourquoi vous devriez faire un dotfiles"
seoImageUrl: https://opengraph.vincenthardouin.dev/cards/Pourquoi vous devriez faire un dotfiles
date: 2021-10-27T11:07:00+02:00
draft: false
---
Pour mon premier article, je souhaite vous partager comment je mets en place mon environnement de travail facilement.

Pour cela, j'utilise un dotfiles, dossier vous permettant de mettre en place votre configuration, via notamment les
fichiers de configs .zshrc, .vimrc, …

Je vous incite dès aujourd'hui à vous créer un dotfiles, et ce pour plusieurs raisons :

Mettre en place un set-up de 0 m'arrive minimum une fois par an :

- quand Apple sort sa nouvelle mise à jour majeure : j'effectue alors une clean install.
- installation d'un VPS
- mise en place de VM
- ...

Sachant que toute tâche rébarbative doit pouvoir être faite en moins de 10 minutes et être automatisée autant que
possible (cf: [la pensée md10](https://www.youtube.com/watch?v=bz0zSVNFW-E)), la création d'un dotfiles parait évidente.

Les fichiers de configuration sont précieux et proviennent de nombreux petits ajustements. Le dotfiles vous permettra
donc d'être assuré de ne rien perdre. Vous pouvez faire de votre dotfiles un repository git, le pusher sur GitHub pour
avoir une sauvegarde et ensuite le cloner pour mettre en place un nouvel environnement.

Enfin, libre à vous de créer le dotfiles qui vous correspond. Le mien contient mes fichiers de configuration
principaux : .zshrc, .vimrc, .gitconfig, .gitignore_global. Mais surtout, un Makefile chargé de créer des liens
symboliques à partir de ces fichiers et de télécharger les applications que je souhaite, dont brew avec un Brewfile qui
installe tous mes utilitaires. Un vrai gain de temps !

Si vous souhaitez découvrir plus en détail mon dotfiles, il est disponible
ici : https://github.com/VincentHardouin/.dotfiles

J'espère que ces arguments vous donneront envie de créer le vôtre !
