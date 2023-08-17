---
title: "Revenir sur ses branches récentes avec git"
date: 2023-08-17T08:34:02+02:00
draft: false
---

Lorsque nous travaillons sur un projet avec git, nous changeons régulièrement de branches, pour différentes raisons :
travailler sur une nouvelle fonctionnalité, pendant qu'une autre est en cours de review, pour prendre en compte des
retours de review, pour faire une review, etc.

Il peut être intéressant de pouvoir revenir rapidement sur une branche que nous avons récemment utilisée.
Nous pouvons utiliser la commande `git switch -` qui permet de revenir sur la dernière branche utilisée.
Cependant, parfois, nous souhaitons revenir sur une branche utilisée il y a plus longtemps.
Pour cela, nous pouvons utiliser cette commande, qui permet de choisir la branche sur laquelle nous souhaitons revenir
grâce à [fzf](https://github.com/junegunn/fzf) :

```bash
git reflog | grep checkout | grep -o 'to .*$' | grep -o ' .*$' | awk '!x[$0]++' | fzf | xargs git switch
```

![demonstration de la commande permettant de revenir sur une branche précédente](demo-command-git.gif)