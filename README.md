# Your Personal Website — Jekyll Edition

A minimal, high-contrast personal site for software engineers.  
Built with Jekyll so GitHub Pages renders it automatically — no build step, no CI needed.

## ✦ Project structure

```
oliverandcode.github.io/
├── _config.yml                     ← site settings: name, bio, links, accent color
│
├── _data/
│   └── categories.yml              ← category registry (for blog)
│
├── _drafts/                        ← blog post drafts
│   └── YYYY-MM-DD-slug.md          ← blog post template (literal name of file)
├── _posts/                         ← one Markdown file per blog post
│   └── YYYY-MM-DD-slug.md          ← blog posts are all named in this format
├── _posts_ai_content/              ← filler content
├── _posts_old/                     ← old blog posts from site v1.0
│
├── index.md                        ← home page
├── about/
│   └── index.html                  ← about page content and flip photo easter egg
├── blog/
│   ├── category/                   ← contains all blog category pages (for filtering by category)
│   │   └── category-name.html      ← individual category page
│   └── index.html                  ← triggers jekyll-paginate # TODO: BUG: pagination is broken
├── projects/
│   └── index.md                    ← projects index 
│
├── _layouts/
│   ├── default.html                ← wraps every page (head, nav, footer, scripts)
│   ├── home.html                   ← home page with name, job title,professional links 
│   ├── projects.html               ← under-construction + tic-tac-toe # TODO: under construction (waiting for projects to be added)
│   ├── blog-index.html             ← paginated card grid for /blog/ # TODO: BUG: pagination is broken
│   └── post.html                   ← single post with prev/next nav
│
├── _includes/
│   ├── head.html                   ← <head> contents (meta, CSS, SEO)
│   ├── header.html                 ← site header with title and tagline
│   ├── navbar.html                 ← site navigation
│   ├── pro-links.html              ← formatted links to GitHub, LinkedIn, email
│   ├── blog-card.html              ← blog post preview card (loaded on home page at root / and blog index page at /blog)
│   ├── footer.html                 ← site footer
│   ├── scripts.html                ← JS loaded before </body>
│   └── tictactoe.html              ← game markup (logic in assets/js/tictactoe.js) # NOTE: currently unused
├── _sass/
│   ├── _tokens.scss                ← colors, fonts, spacing # NOTE: edit here to retheme
│   ├── _base.scss                  ← reset, body, utility classes
│   ├── _nav.scss                   ← header and navigation styles # TODO: separate header and nav styles
│   ├── _hero.scss                  ← homepage hero
│   ├── _about.scss                 ← about page styles
│   ├── _blog.scss                  ← card grid, pagination, single post # TODO: fix pagination
│   ├── _projects.scss              ← under-construction + game # TODO
│   └── _footer.scss                ← footer block
├── assets/
│   ├── css/
│   │   └── main.scss                ← entrypoint — imports all _sass partials
│   ├── img/
│   │   └── image.png                ← image files (logo, photos, alternate favicons, placeholders)
│   └── js/
│       ├── flip.js                  ← flip photo on about page to find easter egg (loaded only on /about)
│       ├── gridlock.js              ← construction site sliding tile game logic (loaded only on /projects)
│       ├── nav.js                   ← mobile hamburger (loaded everywhere)
│       └── tictactoe.js             ← tic-tac-toe game NOTE: currently unused
├── .github/
│   └── workflows/                   ← GitHub workflows
│       └── jekyll.md                ← deploy to GitHub Pages
├── .gitignore                       ← files excluded from git version control
├── LICENSE                          ← GNU General Public License v3.0
├── favicon.ico                      ← default favicon
├── Gemfile                          ← manage external dependencies
└── README.md                        ← project documentation
```

---

## ✦ Run locally

```bash
bundle install
bundle exec jekyll serve --livereload
# → http://localhost:4000
```

Requires Ruby ≥ 3.0. If you don't have it: `brew install ruby` on macOS.

---

## ✦ Common customizations

### Add a blog post
Create a file in `_posts/` named `YYYY-MM-DD-your-slug.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2026-01-15
excerpt: "One or two sentences shown in the blog card preview."
---

Your post content here, written in **Markdown**.
```

That's it — Jekyll picks it up automatically.

### Replace your profile photo
Swap out `assets/img/placeholder.jpg` with your own image (keep the filename, or update the `<img src>` in `index.html`).

---

## ✦ Adding real projects // TODO
When you're ready, replace the "Under Construction" content in `_layouts/projects.html` with your project cards. 