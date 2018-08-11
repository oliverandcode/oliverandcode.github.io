---
title: Today's Update
date: 2018-08-05 12:00:00
---

### What I did:
* started labeling todos with git branches if relevant (or if I can remember them) because I keep forgetting/almost forgetting to switch branches when resolving issues
* fixed image src in about - it displays now!
* added both GitHub links in about
* added title to blog page
* fixed blog post title list formatting! it's actual words now
* made title, date, and author display on each post page! added post.html in _layouts and changed _config defaults for posts from "default" to "post"
* designed a logo! uploaded said logo! got logo to display in header!
* designed a favicon! uploaded said favicon! did not get favicon to display... :(

### TODO:
- [x] fix blog post title list formatting (branch: blog)
- [x] why won't image display on about page? fix! (branch: about)
- [ ] not causing issues right now as far as I can tell, but why are _site changes still being tracked after putting _site into .gitignore?
- [x] no menu/nav bar displayed on mobile (new branch: mobile-menu)
    - only true in portrait mode!!! when in landscape the nav bar displays as on desktop
- [ ] put contact info/social media links in footer (new branch: footer)
- [x] put github(s?) in about page (branch: about)
- [ ] make "next" and "previous" links for each post page (branch: blog)
    - [x] I think this requires making a new layout for posts, so go ahead and make post.html in _layouts and copy default.html, then tweak as needed?
- [x] display title and date on each post page (branch: blog)
- [x] make header title link back to index (home) not just ... the current page ... (branch: ???)
- [x] add "Dear Dev Diary" to blog page (branch: blog)
- [x] change text of "blog" link to "dev diary"?? (branch: blog)
    - [x] NO CHANGE IT BACK I HATE IT
- [ ] make blog post title list format PRETTIER - look at hmfaysal's css again I guess (branch: blog)
- [x] design and upload logo/favicon (branch: logo)
    - [ ] still need to figure out how to get the favicon to actually DISPLAY (the link in the head is somehow ... not working ...)
- [x] so much repeated code between layouts - start using _includes for head, header, footer, etc (new branch: includes)
