const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("game-status");
const restartBtn = document.getElementById("restart-btn");

let currentPlayer = "X";
let gameBoard = Array(9).fill(null);
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach(cell => {
  cell.addEventListener("click", handleCellClick);
});

restartBtn.addEventListener("click", restartGame);

function handleCellClick(e) {
  const cell = e.target;
  const index = cell.dataset.index;

  if (!gameActive || gameBoard[index]) return;

  gameBoard[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add("disabled");

  if (checkWinner()) {
    statusText.textContent = `Player ${currentPlayer} Wins!`;
    gameActive = false;
    highlightWinnerCells(checkWinner());
    return;
  }

  if (gameBoard.every(cell => cell)) {
    statusText.textContent = "It's a Draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return combination;
    }
  }
  return null;
}

function highlightWinnerCells(cellsToHighlight) {
  cellsToHighlight.forEach(index => {
    cells[index].classList.add("winner");
  });
}

function restartGame() {
  gameBoard.fill(null);
  gameActive = true;
  currentPlayer = "X";
  statusText.textContent = `Player X's Turn`;
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("disabled", "winner");
  });
}
