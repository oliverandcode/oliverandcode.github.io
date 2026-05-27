// =====================================================
//  TIC-TAC-TOE
//  Loaded only on the projects page.
//  Markup lives in _includes/tictactoe.html
// =====================================================

(function () {
  const WINNING_LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6],             // diagonals
  ];

  let board   = Array(9).fill(null);
  let current = 'X';
  let over    = false;

  const statusEl = document.getElementById('ttt-status');
  const resetBtn = document.getElementById('ttt-reset');
  const cells    = document.querySelectorAll('.ttt-cell');

  function getWinner() {
    for (const [a, b, c] of WINNING_LINES) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { mark: board[a], line: [a, b, c] };
      }
    }
    return null;
  }

  function render(winLine = []) {
    cells.forEach((el, i) => {
      el.textContent = board[i] || '';
      el.className   = 'ttt-cell';
      if (board[i])            el.classList.add(board[i].toLowerCase(), 'taken');
      if (winLine.includes(i)) el.classList.add('win');
    });

    const winner = getWinner();
    if (winner) {
      statusEl.innerHTML = `<strong>${winner.mark}</strong> wins! 🎉`;
    } else if (board.every(Boolean)) {
      statusEl.textContent = 'Draw! Impressive self-awareness.';
    } else {
      statusEl.innerHTML = `<strong>${current}</strong>'s turn`;
    }
  }

  function handleMove(index) {
    if (board[index] || over) return;

    board[index] = current;

    const winner = getWinner();
    if (winner) {
      over = true;
      render(winner.line);
      return;
    }
    if (board.every(Boolean)) {
      over = true;
      render();
      return;
    }

    current = current === 'X' ? 'O' : 'X';
    render();
  }

  function reset() {
    board   = Array(9).fill(null);
    current = 'X';
    over    = false;
    render();
  }

  // Bind events
  cells.forEach((el, i) => el.addEventListener('click', () => handleMove(i)));
  resetBtn.addEventListener('click', reset);

  // Initial render
  render();
}());
