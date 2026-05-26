---
layout: post
title: "The Git Aliases That Stuck After Five Years"
date: 2025-07-07
excerpt: "I've tried dozens of git aliases. These are the six that survived every machine migration and team onboarding session."
categories:
  - tools
  - engineering
---

A good alias disappears into muscle memory. A bad one is a liability every time someone looks over your shoulder. Here are the survivors.

## The six that made it

```bash
  st  = status -sb
  co  = checkout
  br  = branch --sort=-committerdate
  lg  = log --oneline --graph --decorate -20
  undo = reset HEAD~1 --mixed
  wip  = !git add -A && git commit -m "wip"
```

## Why these?

`st` gives you the compact status view — branch info on line one, changed files below. `br` sorts branches by most recently touched, which is almost always what you want.

`undo` is the one I reach for most. Soft reset the last commit, keep the changes staged — perfect for "I committed too early."

`wip` is a quick save before a context switch. I always amend or squash it before pushing.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
