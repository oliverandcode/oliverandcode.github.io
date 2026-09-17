---
layout: post
title: "Code Coaching: Session 0"
date: 2026-05-25
excerpt: "I recently started coaching a friend of mine on learning Python."
categories:
  - learning-to-code
  - mentorship
  - python
---

I recently started coaching a friend of mine on learning Python. She's done some online learning already and understands basic syntax, but she wants to connect the dots between that and the kind of project she's likely to do at work, as a data analyst in the nonprofit sector.

I'm excited about this for several reasons! One is that I've been itching for a project for a long time. Two is that I have so much gratitude for the mentors in my own programming journey, and have always wanted to pay it forward. Three is that it helps me deepen my own knowledge! Ive used Python a lot, but I've never done data analysis, and I'm excited to learn.

## Recap

Here's what we did in our first session:

- We got my friend set up on GitHub.
- We talked about what she's working on right now and came up with a basic goal: to sort through a list of active programs (in the nonprofit sense, not the coding sense) offered by nonprofits in this area, compare that to an list of programs stored in my friend's nonprofit org's internal data system, and find out which programs are not being tracked.
- We created a repo for this project on GitHub, cloned it to my friend's computer, and opened it in VS Code.
- I wrote a very simple code snippet to filter 2 example lists (with very limited sample data that I made up — her work data is secure, and I'm just making a template), comparing one list to the other and spitting out a new list containing all the missing items — it was near the end of our session at this point, and I wanted her to have something she could work on in the meantime if she wanted to.
- We created a new git branch to track these changes, committed the code snippet, and pushed the commit up to her origin repo on GitHub.

## Our code snippet:

```python

# import statements (if any)

# example lists 
all_flowers = ["rose", "carnation", "lily", "tulip", "daffodil", "begonia", "pansy", "petunia", "daisy"]
known_flowers = ["rose", "tulip", "petunia", "daisy"]

# declare/initialize result
unknown_flowers = []

# filter both lists, find missing items, and add them to unknown_flowers
for flower in all_flowers:
    # find missing items
    if flower not in known_flowers:
      # add missing item to result list (unknown_flowers)
      unknown_flowers.append(flower)

# display results
for flower in unknown_flowers:
    print(flower)

```

## Parting Thoughts

Off to a good start! Next time I am going to ask her to explain what this code snippet does, because I think she has the basic syntax down and that's an achievable goal. We'll talk about abstracting it out to a function and running a test on it, and why those things matter. And I'm going to ask her what she wants to do with the data the real version of this (the one for her list of nonprofit programs) spits out, so that we have a more specific end goal to work toward. 

