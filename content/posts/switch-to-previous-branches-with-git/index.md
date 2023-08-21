---
title: "Switch to previous branches with git"
date: 2023-08-17T12:06:07+02:00
draft: false
---

When we work on a project with git, we regularly switch branches for different reasons: working on a new feature while
another is in review, taking into account review feedbacks, doing a review, etc.

It can be interesting to quickly switch to a branch that we have recently used.
We can use the `git switch -` command which allows us to switch to the last used branch.

However, sometimes we want to go back to a branch that was used long ago.
Thanks to [fzf](https://github.com/junegunn/fzf), we can use the following command, which allows us to choose the branch
we want to go back:

```bash
git reflog | grep checkout | grep -o 'to .*$' | grep -o ' .*$' | awk '!x[$0]++' | fzf | xargs git switch
```

![command demo to go back to recent branch](demo-command-git.gif)