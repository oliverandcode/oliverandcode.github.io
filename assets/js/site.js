/* ================================================
   SITE DATA  —  edit this to add real content
   ================================================ */

const SITE = {
  name:    "Oliver Ayers",
  title:   "Software Engineer",
  github:  "https://github.com/oliverandcode",
  linkedin:"https://www.linkedin.com/in/oliver-ayers-090870a3/",
  bio: `
  I'm a full stack software engineer based in Los Angeles. Python is my comfort zone, but I also work with TypeScript/React, Java, and modern frontend tools. I am invested in thoughtful architecture and clear communication. Good collaboration means solving the right problem, not just the obvious one.
  
  My background is unconventional and primarily self-directed, with a highly condensed computer science foundation through LaunchCode in 2017. The first project I built solo was a performance art piece about truth acceptance. I still find myself drawn to projects with a little whimsy and curiosity about the human condition.
  
  Later, I spent three years at an aerospace startup, where I grew from temporary intern to full-time engineer with responsibility for major features and our automated testing infrastructure. A stable app is a well-oiled machine, and it stays that way through rigorous test suites that grow alongside the codebase they protect.
  `,
};

const POSTS = [
  {
    slug: "template-blog-entry",
    title: "Title of Blog Entry",
    date: "2030-01-01",
    preview: "First sentence or two of blog entry. Or a summary.",
    body: `<h2>Subtitle or header of a section</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
Phasellus euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl,
nec aliquam nisl nisl sit amet nisl. Sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua.</p>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<h2>The three-sentence test</h2>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
natus error sit voluptatem accusantium doloremque laudantium.</p>
<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
sequi nesciunt.</p>`,
  },
  {
    slug: "code-coaching-session-0",
    title: "Code Coaching: Session 0",
    date: "2026-04-21",
    preview: "Mentoring a friend on Python.",
    body: `<h2></h2>
<p>Recently I started coaching a friend of mine on learning Python. She's done some online learning already and understands basic syntax, but she wants to connect the dots between that and the kind of project she's likely to do at work, as a data analyst in the nonprofit sector.</p>
<p>I'm excited about this for several reasons! One is that I've been itching for a project for a long time. Two is that I have so much gratitude for the mentors in my own programming journey, and have always wanted to pay it forward. Three is that it helps me deepen my own knowledge! Ive used Python a lot, but I've never done data analysis, and I'm excited to learn. </p>
<h2>Recap</h2>
<p>Here's what we did in our first session:</p>
<ul>
    <li>We got my friend set up on GitHub</li>
    <li>We talked about what she's working on right now and came up with a basic goal: to sort through a list of active programs (in the nonprofit sense, not the coding sense) offered by nonprofits in this area, compare that to an list of programs stored in my friend's nonprofit org's internal data system, and find out which programs are not being tracked.</li>
    <li>We created a repo for this project on GitHub, cloned it to my friend's computer, and opened it in VS Code</li>
    <li>I wrote a very simple code snippet to filter 2 example lists (with very limited sample data that I made up — her work data is secure, and I'm just making a template), comparing one list to the other and spitting out a new list containing all the missing items — it was near the end of our session at this point, and I wanted her to have something she could work on in the meantime if she wanted to</li>
    <li>We created a new git branch to track these changes, committed the code snippet, and pushed the commit up to her origin repo on GitHub</li>
</ul>
<br>
<h2>Our code snippet:</2>
<pre><code># import statements (if any)

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
    print(flower)</code></pre>
<br>
<h2></h2>
<p>
Off to a good start! Next time I am going to ask her to explain what this code snippet does, because I think she has the basic syntax down and that's an achievable goal. We'll talk about abstracting it out to a function and running a test on it, and why those things matter. And I'm going to ask her what she wants to do with the data the real version of this (the one for her list of nonprofit programs) spits out, so that we have a more specific end goal to work toward. 
</p>
`,
  },
  {
    slug: "typescript-utility-types",
    title: "TypeScript Utility Types I Wish I'd Learned Earlier",
    date: "2025-08-19",
    preview: "Partial, Pick, Omit — sure. But what about Awaited, Parameters, and the lesser-known gems that will change how you model your domain?",
    body: `<h2>Beyond the basics</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. TypeScript ships
with more than 20 built-in utility types and most tutorials stop at the
obvious four.</p>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab
illo inventore veritatis et quasi architecto beatae vitae.</p>
<pre><code>type ApiResponse&lt;T&gt; = {
  data: T;
  status: number;
  ok: boolean;
};</code></pre>
<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
sequi nesciunt.</p>`,
  },
  {
    slug: "git-aliases-that-stick",
    title: "The Git Aliases That Stuck After Five Years",
    date: "2025-07-07",
    preview: "I've tried dozens of git aliases. These are the six that survived every machine migration and team onboarding session.",
    body: `<h2>Less typing, more shipping</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A good alias
disappears into muscle memory. A bad one is a liability every time someone
looks over your shoulder.</p>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat. Here are the survivors from my
<code>.gitconfig</code>.</p>`,
  },
  {
    slug: "code-review-etiquette",
    title: "Code Review Isn't About the Code",
    date: "2025-05-22",
    preview: "The best code reviewers I've worked with share one trait — they review the person, not just the diff. A few principles I try to bring to every PR.",
    body: `<h2>The human on the other side</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Every comment
you leave is read by a person who spent hours on that code. That context
changes everything.</p>
<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
  },
  {
    slug: "local-first-apps",
    title: "Local-First Software: Why I'm Betting on It",
    date: "2025-03-11",
    preview: "The cloud ate everything. Now a quiet movement is pushing back — with CRDTs, SQLite in the browser, and a different idea of where your data should live.",
    body: `<h2>Offline is a feature</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. There's a
philosophical argument and a practical one for local-first software.
I find both compelling.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur.</p>`,
  },
  {
    slug: "postgres-jsonb-patterns",
    title: "Five Postgres JSONB Patterns Worth Knowing",
    date: "2025-01-28",
    preview: "You've heard that JSONB in Postgres is powerful. Here are the five query patterns that show up in real production code.",
    body: `<h2>Beyond SELECT *</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. JSONB operators
unlock a surprising amount of power without ever leaving SQL.</p>`,
  },
  {
    slug: "on-technical-writing",
    title: "On Technical Writing as a Superpower",
    date: "2024-11-09",
    preview: "The engineers with outsized impact I've observed all share one habit — they write clearly about technical topics. Here's how I've tried to cultivate that.",
    body: `<h2>Writing is thinking</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "css-custom-properties",
    title: "CSS Custom Properties Are More Powerful Than You Think",
    date: "2024-09-14",
    preview: "Beyond theming: custom properties as stateful design tokens, animation levers, and component APIs — with examples you can use today.",
    body: `<h2>Variables with superpowers</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "debugging-mindset",
    title: "The Debugging Mindset: How to Think When Nothing Makes Sense",
    date: "2024-07-01",
    preview: "Debugging is a skill. Here's the mental framework I've built over years of staring at logs, bisecting commits, and eventually finding the absurd root cause.",
    body: `<h2>Embrace the mystery</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "monorepos-for-small-teams",
    title: "Monorepos Aren't Just for Big Tech",
    date: "2024-04-20",
    preview: "A two-person team can benefit from a monorepo setup. Here's the minimal configuration that's worked for us — without the enterprise overhead.",
    body: `<h2>Shared fate, shared code</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "http-caching-explained",
    title: "HTTP Caching, Explained Simply",
    date: "2024-02-08",
    preview: "Cache-Control headers confuse almost everyone. This is my attempt to explain them in plain English, with diagrams and concrete examples.",
    body: `<h2>The headers that matter</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
];

/* ================================================
   ROUTER  — simple hash-based SPA routing
   ================================================ */

const PER_PAGE = 10;

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });
}

function navigate(hash) {
  window.location.hash = hash;
}

function router() {
  const hash = window.location.hash.replace("#", "") || "home";
  const [page, ...params] = hash.split("/");

  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));

  const navMap = { home: "home", blog: "blog", projects: "projects" };
  const navTarget = navMap[page] || page;
  const navLink = document.querySelector(`.nav-links a[href="#${navTarget}"]`);
  if (navLink) navLink.classList.add("active");

  if (page === "home") {
    document.getElementById("page-home").classList.add("active");
  } else if (page === "blog") {
    const pageNum = parseInt(params[0]) || 1;
    renderBlogList(pageNum);
    document.getElementById("page-blog").classList.add("active");
  } else if (page === "post") {
    const slug = params[0];
    renderPost(slug);
    document.getElementById("page-post").classList.add("active");
  } else if (page === "projects") {
    document.getElementById("page-projects").classList.add("active");
  }

  window.scrollTo(0, 0);
}

/* ── Blog list renderer ──────────────────────────── */

function renderBlogList(pageNum) {
  const sorted = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const total  = Math.ceil(sorted.length / PER_PAGE);
  const slice  = sorted.slice((pageNum - 1) * PER_PAGE, pageNum * PER_PAGE);

  const grid = document.getElementById("blog-grid");
  grid.innerHTML = slice.map(post => `
    <a class="blog-card" href="#post/${post.slug}">
      <div class="blog-card-date">${formatDate(post.date)}</div>
      <div class="blog-card-title">${post.title}</div>
      <div class="blog-card-preview">${post.preview}</div>
      <div class="blog-card-read">Read →</div>
    </a>
  `).join("");

  // Pagination
  const pag = document.getElementById("blog-pagination");
  if (total <= 1) { pag.innerHTML = ""; return; }
  let html = "";
  if (pageNum > 1)
    html += `<button class="page-btn" onclick="navigate('blog/${pageNum-1}')">←</button>`;
  for (let i = 1; i <= total; i++) {
    html += `<button class="page-btn${i === pageNum ? " active" : ""}"
      onclick="navigate('blog/${i}')">${i}</button>`;
  }
  if (pageNum < total)
    html += `<button class="page-btn" onclick="navigate('blog/${pageNum+1}')">→</button>`;
  pag.innerHTML = html;
}

/* ── Single post renderer ────────────────────────── */

function renderPost(slug) {
  const sorted = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const idx    = sorted.findIndex(p => p.slug === slug);
  const post   = sorted[idx];
  if (!post) { navigate("blog"); return; }

  const prev = sorted[idx + 1];
  const next = sorted[idx - 1];

  document.getElementById("post-eyebrow").textContent = formatDate(post.date);
  document.getElementById("post-title").textContent   = post.title;
  document.getElementById("post-body").innerHTML      = post.body;

  const navEl = document.getElementById("post-nav");
  navEl.innerHTML = `
    <div>${prev ? `<a class="post-nav-item" href="#post/${prev.slug}">
      <div class="post-nav-label">← Previous</div>
      <div class="post-nav-title">${prev.title}</div>
    </a>` : ""}</div>
    <div>${next ? `<a class="post-nav-item next" href="#post/${next.slug}">
      <div class="post-nav-label">Next →</div>
      <div class="post-nav-title">${next.title}</div>
    </a>` : ""}</div>
  `;
}

/* ================================================
   TIC-TAC-TOE
   ================================================ */

const TTT = {
  board:   Array(9).fill(null),
  current: "X",
  over:    false,
  wins:    [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],

  reset() {
    this.board   = Array(9).fill(null);
    this.current = "X";
    this.over    = false;
    this.render();
  },

  winner() {
    for (const [a,b,c] of this.wins)
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c])
        return { mark: this.board[a], line: [a,b,c] };
    return null;
  },

  move(i) {
    if (this.board[i] || this.over) return;
    this.board[i] = this.current;
    const w = this.winner();
    if (w) { this.over = true; this.render(w.line); return; }
    if (this.board.every(Boolean)) { this.over = true; this.render(); return; }
    this.current = this.current === "X" ? "O" : "X";
    this.render();
  },

  render(winLine = []) {
    const cells = document.querySelectorAll(".ttt-cell");
    cells.forEach((el, i) => {
      el.textContent = this.board[i] || "";
      el.className   = "ttt-cell";
      if (this.board[i]) el.classList.add(this.board[i].toLowerCase(), "taken");
      if (winLine.includes(i)) el.classList.add("win");
    });

    const status = document.getElementById("ttt-status");
    const w = this.winner();
    if (w)
      status.innerHTML = `<strong>${w.mark}</strong> wins! 🎉`;
    else if (this.board.every(Boolean))
      status.innerHTML = `Draw! Impressive self-awareness.`;
    else
      status.innerHTML = `<strong>${this.current}</strong>'s turn`;
  }
};

/* ================================================
   INIT
   ================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Populate static home content
  document.getElementById("site-name-display").textContent = SITE.name;
  document.getElementById("hero-bio").textContent          = SITE.bio;
  document.getElementById("link-github").href              = SITE.github;
  document.getElementById("link-linkedin").href            = SITE.linkedin;
  document.querySelectorAll(".site-name-nav").forEach(el => el.textContent = SITE.name);

  // Nav toggle (mobile)
  document.getElementById("nav-toggle").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("open");
  });
  document.querySelectorAll(".nav-links a").forEach(a =>
    a.addEventListener("click", () =>
      document.getElementById("nav-links").classList.remove("open")));

  // Tic-tac-toe
  document.querySelectorAll(".ttt-cell").forEach((el, i) =>
    el.addEventListener("click", () => TTT.move(i)));
  document.getElementById("ttt-reset").addEventListener("click", () => TTT.reset());
  TTT.render();

  // Router
  window.addEventListener("hashchange", router);
  router();
});
