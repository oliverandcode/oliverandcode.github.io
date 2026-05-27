// =====================================================
//  GRIDLOCK: CONSTRUCTION SITE ESCAPE
//  A sliding-block puzzle. The worker (👷, 1×2 horizontal)
//  must reach the right exit on row 1 (0-indexed).
//
//  Grid: 6×6. Cell size: 60px. Board: 360×360px.
//  Pieces are dragged (mouse + touch) along their axis.
//
//  PUZZLE FORMAT  (used in PUZZLES array below):
//  Each piece: { id, emoji, type:'h'|'v'|'worker',
//                col, row, len }
//    col/row = top-left cell (0-indexed)
//    len     = number of cells (h=wide, v=tall)
// =====================================================

(function () {

  // ── Puzzle definitions ───────────────────────────────
  // Add more puzzles here — they'll be picked at random.
  const PUZZLES = [
    {
      name: "Easy Street",
      pieces: [
        { id:'worker', emoji:'👷', type:'worker', col:0, row:1, len:2 },
        { id:'p1',     emoji:'🚜', type:'v',      col:2, row:0, len:3 },
        { id:'p2',     emoji:'🧱', type:'h',      col:3, row:2, len:2 },
        { id:'p3',     emoji:'⚙️', type:'v',      col:4, row:3, len:2 },
        { id:'p4',     emoji:'🛠️', type:'h',      col:1, row:4, len:3 },
      ]
    },
    {
      name: "Foreman's Nightmare",
      pieces: [
        { id:'worker', emoji:'👷', type:'worker', col:0, row:1, len:2 },
        { id:'p1',     emoji:'🚜', type:'v',      col:2, row:0, len:2 },
        { id:'p2',     emoji:'🧱', type:'h',      col:3, row:2, len:3 },
        { id:'p3',     emoji:'⚙️', type:'v',      col:2, row:2, len:3 },
        { id:'p4',     emoji:'🛠️', type:'h',      col:0, row:4, len:2 },
        { id:'p5',     emoji:'🦺', type:'v',      col:4, row:0, len:3 },
        { id:'p6',     emoji:'🏗️', type:'h',      col:1, row:0, len:2 },
      ]
    },
    {
      name: "Rush Hour",
      pieces: [
        { id:'worker', emoji:'👷', type:'worker', col:0, row:1, len:2 },
        { id:'p1',     emoji:'🚜', type:'h',      col:2, row:0, len:2 },
        { id:'p2',     emoji:'🧱', type:'v',      col:3, row:0, len:3 },
        { id:'p3',     emoji:'⚙️', type:'h',      col:3, row:2, len:2 },
        { id:'p4',     emoji:'🛠️', type:'v',      col:2, row:2, len:2 },
        { id:'p5',     emoji:'🦺', type:'h',      col:0, row:5, len:3 },
        { id:'p6',     emoji:'🏗️', type:'v',      col:5, row:1, len:3 },
        { id:'p7',     emoji:'🧰', type:'h',      col:1, row:3, len:2 },
      ]
    }
  ];

  const CELL  = 60;
  const GRID  = 6;
  const EXIT_ROW = 2;   // the worker must exit from this row

  let state  = [];      // current piece positions {id, col, row, ...rest}
  let puzzle = null;

  const board    = document.getElementById('gl-board');
  const statusEl = document.getElementById('gl-status');
  const resetBtn = document.getElementById('gl-reset');
  const hintBtn  = document.getElementById('gl-hint');

  if (!board) return;

  // ── Helpers ──────────────────────────────────────────

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  function occupiedCells(piece) {
    const cells = [];
    for (let i = 0; i < piece.len; i++) {
      if (piece.type === 'v') cells.push({ c: piece.col, r: piece.row + i });
      else                    cells.push({ c: piece.col + i, r: piece.row });
    }
    return cells;
  }

  function buildGrid(except) {
    const g = Array.from({ length: GRID }, () => Array(GRID).fill(null));
    state.forEach(p => {
      if (p.id === except) return;
      occupiedCells(p).forEach(({ c, r }) => {
        if (r >= 0 && r < GRID && c >= 0 && c < GRID) g[r][c] = p.id;
      });
    });
    return g;
  }

  function isWon() {
    const worker = state.find(p => p.id === 'worker');
    // Worker exits when its right edge reaches column GRID
    return worker.col + worker.len >= GRID;
  }

  // ── Rendering ────────────────────────────────────────

  function render() {
    board.innerHTML = '';
    state.forEach(piece => {
      const el = document.createElement('div');
      el.className = 'gl-piece piece--' + piece.type;
      el.dataset.id = piece.id;
      el.style.left   = (piece.col * CELL) + 'px';
      el.style.top    = (piece.row * CELL) + 'px';
      el.style.width  = (piece.type === 'v' ? CELL : piece.len * CELL) + 'px';
      el.style.height = (piece.type === 'v' ? piece.len * CELL : CELL) + 'px';
      el.textContent = piece.emoji;
      el.style.fontSize = piece.len > 1 ? '22px' : '20px';
      attachDrag(el, piece);
      board.appendChild(el);
    });
  }

  // ── Drag logic ────────────────────────────────────────

  function attachDrag(el, piece) {
    const isH = piece.type !== 'v';
    let startMouse, startPos, grid;

    function onStart(e) {
      e.preventDefault();
      const pt = e.touches ? e.touches[0] : e;
      startMouse = isH ? pt.clientX : pt.clientY;
      startPos   = isH ? piece.col  : piece.row;
      grid = buildGrid(piece.id);

      document.addEventListener('mousemove', onMove);
      document.addEventListener('touchmove', onMove, { passive: false });
      document.addEventListener('mouseup',   onEnd);
      document.addEventListener('touchend',  onEnd);
    }

    function onMove(e) {
      e.preventDefault();
      const pt = e.touches ? e.touches[0] : e;
      const delta = ((isH ? pt.clientX : pt.clientY) - startMouse) / CELL;
      const raw   = startPos + delta;

      // Find allowed range
      let lo = 0, hi = GRID - piece.len;
      if (isH) {
        // scan left
        for (let c = startPos - 1; c >= 0; c--) {
          if (grid[piece.row][c]) { lo = c + 1; break; }
        }
        // scan right — allow exit (c === GRID means off-board for worker)
        const maxC = piece.id === 'worker' ? GRID - piece.len : GRID - piece.len;
        for (let c = startPos + 1; c <= maxC; c++) {
          if (c < GRID && grid[piece.row][c]) { hi = c - piece.len; break; }
        }
      } else {
        for (let r = startPos - 1; r >= 0; r--) {
          if (grid[r][piece.col]) { lo = r + 1; break; }
        }
        for (let r = startPos + 1; r <= GRID - piece.len; r++) {
          if (grid[r][piece.col]) { hi = r - piece.len; break; }
        }
      }

      const snapped = Math.round(clamp(raw, lo, hi));
      if (isH) {
        el.style.left = (snapped * CELL) + 'px';
      } else {
        el.style.top = (snapped * CELL) + 'px';
      }
    }

    function onEnd(e) {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('mouseup',   onEnd);
      document.removeEventListener('touchend',  onEnd);

      // Snap piece to grid
      const rect  = board.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const newCol = Math.round((elRect.left - rect.left) / CELL);
      const newRow = Math.round((elRect.top  - rect.top)  / CELL);

      piece.col = isH ? clamp(newCol, 0, GRID) : piece.col;
      piece.row = isH ? piece.row : clamp(newRow, 0, GRID - piece.len);

      render();

      if (isWon()) {
        statusEl.textContent = '🎉 The worker escaped! Great job!';
        statusEl.className = 'game-status win';
      }
    }

    el.addEventListener('mousedown',  onStart);
    el.addEventListener('touchstart', onStart, { passive: false });
  }

  // ── Puzzle setup ─────────────────────────────────────

  function loadPuzzle(p) {
    puzzle = p;
    // Deep copy piece positions into state
    state = p.pieces.map(pc => Object.assign({}, pc));
    statusEl.textContent = p.name + ' — slide the 👷 to the exit →';
    statusEl.className = 'game-status';
    render();
  }

  function newPuzzle() {
    const p = PUZZLES[Math.floor(Math.random() * PUZZLES.length)];
    loadPuzzle(p);
  }

  // ── Hint ─────────────────────────────────────────────

  function hint() {
    const worker = state.find(p => p.id === 'worker');
    // Find the first blocker to the right of the worker
    const grid = buildGrid('worker');
    let blockerCol = GRID;
    for (let c = worker.col + worker.len; c < GRID; c++) {
      if (grid[worker.row][c]) { blockerCol = c; break; }
    }
    if (blockerCol === GRID) {
      statusEl.textContent = 'Hint: Slide the 👷 all the way right to escape!';
    } else {
      const blockerId = grid[worker.row][blockerCol];
      const blocker   = state.find(p => p.id === blockerId);
      statusEl.textContent = `Hint: Move the ${blocker.emoji} out of row ${worker.row + 1} first.`;
    }
    statusEl.className = 'game-status hint';
  }

  // ── Init ─────────────────────────────────────────────

  resetBtn.addEventListener('click', newPuzzle);
  hintBtn.addEventListener('click', hint);

  newPuzzle();

}());
