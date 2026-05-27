# Your Personal Website — Jekyll Edition

A minimal, high-contrast personal site for software engineers.  
Built with Jekyll so GitHub Pages renders it automatically — no build step, no CI needed.

## ✦ Project structure

```
/
├── _config.yml              ← site settings: name, bio, links, accent color
│
├── _layouts/
│   ├── default.html         ← wraps every page (head, nav, footer, scripts)
│   ├── blog-index.html      ← paginated card grid for /blog/
│   ├── post.html            ← single post with prev/next nav
│   └── projects.html        ← under-construction + tic-tac-toe
│
├── _includes/
│   ├── head.html            ← <head> contents (meta, CSS, SEO)
│   ├── header.html          ← site header with title and tagline
│   ├── navbar.html          ← site navigation
│   ├── footer.html          ← site footer
│   ├── scripts.html         ← JS loaded before </body>
│   └── tictactoe.html       ← game markup (logic in assets/js/tictactoe.js)
│
├── _posts/                  ← one Markdown file per blog post
│   └── YYYY-MM-DD-slug.md
│
├── _sass/
│   ├── _tokens.scss         ← colors, fonts, spacing — edit here to retheme
│   ├── _base.scss           ← reset, body, utility classes
│   ├── _nav.scss            ← navigation styles
│   ├── _hero.scss           ← homepage hero
│   ├── _blog.scss           ← card grid, pagination, single post
│   ├── _projects.scss       ← under-construction + tic-tac-toe
│   └── _footer.scss         ← footer
│
├── assets/
│   ├── css/main.scss        ← entrypoint — imports all _sass partials
│   ├── js/
│   │   ├── nav.js           ← mobile hamburger (loaded everywhere)
│   │   └── tictactoe.js     ← game logic (loaded only on /projects/)
│   └── img/
│       └── placeholder.jpg  ← replace with your photo
│
├── index.html               ← homepage
├── blog/index.html          ← triggers jekyll-paginate
├── projects/index.md        ← projects page
├── Gemfile                  ← for local development
└── README.md
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

### Your name, bio, and social links
Edit `_config.yml` — all site-wide settings live here:

```yaml
title:    "Jane Smith"
tagline:  "Software Engineer"

author:
  github:   "https://github.com/janesmith"
  linkedin: "https://linkedin.com/in/janesmith"
```

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

### Add a custom domain
1. Buy a domain (Namecheap, Cloudflare, etc.)
2. Repo → Settings → Pages → Custom domain → enter your domain
3. Add a CNAME DNS record pointing `www` → `yourusername.github.io`
4. GitHub auto-provisions SSL within minutes.

---

## ✦ Adding real projects
When you're ready, replace the "Under Construction" content in `_layouts/projects.html` with your project cards. 