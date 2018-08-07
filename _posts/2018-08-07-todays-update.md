---
title: Today's Update
date: 2018-08-07 10:30:00
---

So, the mobile menu still does not work - but there is a tiny almost unnoticeable rectangle in the upper right corner. The changes I made did SOMETHING. I think my next strategy is going to be to compartmentalize the css files a little more similarly to how they were on hmfaysal/Notepad, where I got all the styling for the menu from. But first...

...I'm starting another website! It'll be a website for the podcast I do with my friend, Survivor Team Go. Do I want to start with a fork to make things easier on myself?? What elements do I need? Obviously there has to be a homepage with an embedded audio player. I don't know that a blog is necessary, but a blog setup is similar to what I want in terms of posting each episode, with descriptions and tags and audio files. Has anyone else created a podcast website using GH Pages? Do I even want to use GH Pages for this? Research is needed.

##### Later:
Okay! I did some research on creating a podcast website using GH Pages, and it seems doable as long as I can host audio files elsewhere, which I can maybe do for free (or for less than a dollar a month??) using Amazon Web Services and CloudFront. Podcasts.com has been free this whole time, but they also lost three of our episodes and their site is clunky and the formatting of the description always comes out wonky and I have many complaints, so I think maybe switching to AWS is a better option for us in the long run. At least this way if I have complaints I can try to address them!

The only potential drawbacks I see to ceasing use of Podcasts.com are:
1. I'm not a very experienced coder, so it may continue to be a clunky experience
2. integration harder???????

but with point 1, I'm not actually *losing* anything if it's still clunky, it's just still clunky. (Although it may start out clunki*er*.) And I'm not going to be a novice coder forever, so eventually it'll get more streamlined! Similar response to point 2: basically, I'll figure it out eventually. Plus, there's no reason we can't keep using Podcasts.com while I iron out the kinks. It's free!

Anyway, I signed up for AWS and followed [this tutorial](https://learnetto.com/blog/tutorial-how-to-use-amazon-s3-and-cloudfront-cdn-to-serve-images-fast-and-cheap) to host my about page image for this website, to test it out. The tutorial is a little out of date (it's from 2 years ago) but it was easy to adjust for discrepancies and now the about page image is hosted on AWS S3! I didn't bother with a CDN for now because I don't have a global audience and I sort of doubt I'm going to have one anytime soon? But good work for a trial run!

### What I did:
- research
- hosted about page image on AWS S3!

### TODO:
- [ ] reorganize css to see if that helps the mobile menu problem (branch: mobile-menu)
- [x] research - podcast website & hosting, RSS feed

### Relevant links:
- [Tutorial: How to host your websites for free using Github Pages](https://learnetto.com/blog/tutorial-how-to-host-your-websites-for-free-using-github-pages) by Samir Talwar (I also browsed his blog, [Monospaced Monologues](https://monospacedmonologues.com/), and I really enjoyed some of his posts, particularly [these](https://monospacedmonologues.com/2016/01/start-simple/) [two](https://monospacedmonologues.com/2016/01/slash-slash-massive-hack/))
- [Tutorial: How to use Amazon S3 and CloudFront CDN to serve images fast and cheap](https://learnetto.com/blog/tutorial-how-to-use-amazon-s3-and-cloudfront-cdn-to-serve-images-fast-and-cheap) by Samir Talwar (also linked above)
- [Podcasting With Jekyll](https://mattsurabian.github.io/podcasting-with-jekyll/) by Matt Surabian
