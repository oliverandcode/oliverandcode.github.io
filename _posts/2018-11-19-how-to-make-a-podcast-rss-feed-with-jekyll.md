---
title: How to Make a Podcast RSS Feed With Jekyll
date: 2018-11-19 16:00:00
---

### ...a Highly Specific and Meandering Tutorial

#### **Intro**
So, I really struggled with making the RSS feed for my podcast website - [Survivor Team Go!](http://www.survivorteamgo.com/) Also listed on my [Projects]({{site.url}}/projects/) page! -- and I thought I'd go through the steps (and missteps) I took, to kind of illuminate the process for anyone else looking to do the same thing.

This guide assumes you already have a lot of things set up:
- a podcast
- a place to host podcast episodes online
- text content for various podcast information fields (episode description, short summaries, overal podcast description, episode keywords, etc)
- a Jekyll site
- episode pages filed in `_posts` directory (and nothing else in that directory - you can modify this if you have other non-podcast entries in your _posts directory, but my podcast website doesn't require that)

#### **Backstory**
First let me explain what I did. I don't exactly *recommend* my approach, because as you will notice, it kind of tripped me up. But I want to be honest and show how and what I learned from my experience (/mistakes?).

The temptation to copy other people's code as a shortcut to Getting Things Done Already is very strong. As a pretty novice coder, I've done it a lot - because it seems faster, because staring at an empty text editor is intimidating, because it's difficult to find detailed step-by-step tutorials that suit my specific needs, because scrolling through the documentation for multiple technologies that work together is really frustrating and overwhelming - it's hard!!!!!!!!!!! Coding is hard!!!!!!!! I love to whine about how hard it is, and I'm not the only one. When I was in St. Louis's LaunchCode program, our cohort would split into groups every class period to work on our assignments and personal coding projects and we'd always devote at least 15 minutes to complaining about how hard everything was and how we were really having trouble with this or that problem. It was really nice to vent, I think in part because we were all worried that actually, everyone else was humming along just fine, and it was just us as individuals who were struggling, because we were just not equipped to learn how to be programmers. Like group therapy for intense imposter syndrome.

Anyway.

I set up the bare bones of my podcast website (mostly copied code from my dev webiste, aka this one, which in turn has a lot of copied code, from various sources - I have tried to provide attribution in my updates as much as possible, though all of it is modified to suit my specific needs and preferences of course). 

#### **Free Non-Coding Alternative for Fellow Podcasters**
I made pages for each episode we'd released so far - oh, before the website I created, we'd been using [Podcasts.com](http://www.podcasts.com/) to host our podcast and generate our RSS feed for iTunes and other podcast aggregators (or podcatchers!!! what a cute word!!!) and it was working ~fine, but there were occasional bugs (our first three episodes disappeared temporarily, and I don't understand why) and I wanted more control over the information and analytics. Plus we just needed a website, and our budget for the podcast is, uh, essentially nonexistent (the most we've ever spent is the time we got 3 $15 USB microphones, I think), and I'm a programmer, if a novice one, so surely I can figure something out for us. But Podcasts.com is free, and has pretty high audio file size limits, so as long as your podcast episodes are less than 2 hours long you're probably fine using them. And they generate the RSS feed for you, which is great! My only issue with them is that they're a little clunky to use and I wanted more control over our content, which are pretty minor concerns if you just want to start publishing your podcast, honestly.

#### **Hosting**
In order to host the actual audio files, I did some googling and found [this tutorial](https://learnetto.com/blog/tutorial-how-to-use-amazon-s3-and-cloudfront-cdn-to-serve-images-fast-and-cheap) on how to use Amazon S3 to host large files cheaply (audio files eat up storage quickly, and our episodes average around an hour per episode). I have not (yet?) implemented the tutorial's suggestion to use a CDN, mostly because I have no reason to believe anyone besides a couple of our friends and family are listening to the podcast yet, so making the files load faster for people who live outside of my geographic region isn't really a priority right now! At some point I do want to set up a way to track episode downloads and so on, and I know you can do that with S3 buckets, but I haven't learned how yet. For now I've got the basics in place, and I have the S3 links hooked up in the front matter of each episode's page. (The key-value pair is `mp3_link` and then the actual S3 link to the file, which is in mp3 format. For an example, you can find the markdown file for our first episode's page [here](https://github.com/oliverandcode/survivorteamgo/blob/master/_posts/2018-03-20-episode-1.md) on github.)

#### **RSS Feed Trials and Tribulations**
Once I had all that set up, I knew that the next step was to create an RSS feed for the podcast. I was looking forward to having more control over our content, its distribution, and the analytics, as well as having a cleaner looking URL to submit to podcast aggregators. 

So I did some googling, something like "how to generate rss feed jekyll podcast" and I found a few results for that very niche search, amazingly. So then I went to [this GitHub repo](https://github.com/joebuhlig/Jekyll-Podcast-Feed) and I looked at it but I didn't understand it. So I went to look at that guy's podcast website, and the website's [GitHub repo](https://github.com/joebuhlig/joebuhlig.com), which was overwhelming because it's not *just* a podcast website, it's also his blog and professional website. So I looked for just his RSS feed, and there were 3 of them! One for everything, one for just the blog, and [one RSS feed for just the podcast](https://github.com/joebuhlig/joebuhlig.com/blob/master/feed/podcast/index.xml). So I copied his podcast RSS feed and pasted it into an xml document in my podcast website's local repo, and modified the variables (the podcast-wide variables in _config and the episode-specific variables in the front matter of each episode's page) to match mine, and checked it and double checked it, and then committed the changes and pushed them to the official website repo. 

#### **Failure**
At that point I was thinking, "cool, that was easier than I thought it would be, I hope it works so I can submit this feed to iTunes!" but then I realized that I didn't know how to ...test it? So I did some googling, like "how to test rss feed????????? podcast" or something, and found a bunch of podcast rss feed validators! And I copied and pasted my feed URL into the validators (I used [PodBase](https://podba.se/validate/#) and [Cast Feed Validator](https://castfeedvalidator.com/) mostly), and it failed all the tests. :( All the tests!

One of the first tests it failed said it wasn't good xml, which confused me, so I went through it very carefully to make sure all the tags were closed because I have heard that's a common, easy-to-miss bug. Then I tested it again, and it still failed. Frustrating. After that I wasn't really sure what to look for, or what it was supposed to look like - maybe Joe Buhlig's website and podcast was just set up so differently from mine that it wasn't compatible? - so I looked up other people's podcast RSS feeds on GitHub, making sure they were using Jekyll, and that was interesting and informative but ultimately did not clue me into the problem with my feed, though I did spend a few hours on it and learned some things.

Since I still couldn't make it pass any tests on the validators, I needed a better way to look at it and diagnose it locally, and it was only at this point that I realized I could just...look at the feed itself. Like, run the website locally and use the local URL for the feed and see what it was doing. As it turned out, it was doing very little!!!!! The RSS feed was there, but it was empty. The title showed up, the image showed up, but there was no list of episodes! Why????

#### **Troubleshooting**
I went through various troubleshooting approaches to solve this:
- maybe I'm not using the right Jekyll variable to access all the markdown files in the `_posts` directory?
- does Liquid logic not work in xml documents? do I need to switch to a different templating language?
- oh hey I can "view source" for the RSS feed page, let's see what's happening there
- let's try copying and pasting a different person's podcast RSS feed and using that instead
- et cetera

#### **Despair**
Anyway, none of that solved the problem. So I decided that I had been foolish to copy and paste code and expect it to work even if I did modify it properly to suit my needs as far as I could tell. This was a low point. I had a lot of tabs open, with various RSS feeds and their source codes, GitHub repos and explanations of Liquid extensions, Podcasts Connect help pages and RSS docs. I began to think I was never going to solve the problem!

#### **Starting Over**
I decided to go back to basics and just look up how to make a very basic RSS feed and build it piece by piece from scratch. I found some tutorials, and by far the simplest and most helpful of the ones I found was [this one](https://www.w3schools.com/xml/xml_rss.asp) from w3schools.com. By doing this, I discovered that the bug was in my `<itunes:category>` tag. Our main category for our podcast is "Society & Culture" which ... has an ampersand. The ampersand was screwing with the rest of the code. It needed to be `&amp;` instead, which it *should* have been, since the `site.itunes_category` variable was followed by a filter (`cdata_escape`) that should have "escaped" the ampersand (aka, turned it into the html entity `&amp;`) but the filter was not working, and I have not yet figured out *why*, so I just replaced the variable with typing `Society &amp; Culture` directly into the `<itunes:category>` tag for now.

#### **A New Hope**
What's more, as soon as I fixed that in my other two (copy-pasted) attempts at creating an RSS feed, they worked! In fact, the second one was absolutely perfect, and passed all the validation tests, so I am now using that one as our official podcast RSS feed for all aggregator services. I deleted my first copy-pasted attempt, moved the second one to the top of the `feed` directory, and kept my from-scratch one in a nested folder to preserve my efforts, and possibly come back to it later. You can find the current, in-use, RSS feed [here](). The xml file that generated it is [here](). The from-scratch version that I haven't finished is [here](). When I do finally clean up the from-scratch version these links will be out of date, but I have other things I want to do first so it'll be a while. (Someday I will preserve old versions of my code in gists or something for better use in explanations of The Process but that day is not today. Today I have been working on this post for a week and I want it done.)

#### **Conclusions**
The moral of the story isn't really "don't copy other people's code" but rather "if you copy other people's code it may take you a lot longer to debug than it would if you just built it from scratch" and that's a risk I think a lot of us are willing to take, sooooooooo..........go ahead? But don't have illusions about it! Whether you build things from scratch or modify things other people have built to suit your needs, you will learn from the process, and that's good!

#### **Going Forward**
Next up:
- Cosmetic changes to podcast website, like the episode list (make changes to `episode_list.html` and possibly the stylesheets as well)
- Write bios for about page and upload our professional photos (very little coding involved)
- Learn more about escaping text? and CDATA?
- Write more tutorials/explanations like this one! I really feel that this helped me understand what I'm doing nearly as much as actually doing it! I do not know if it is helpful to anyone else, but hopefully the more I write these the more helpful they will be!
- buy the domain name "oliverandcode.com"