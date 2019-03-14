const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// -------- state -------- //
let player = 'X';

const board = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
];

let win = false;

// -------- utils -------- //
const printBoard = () => {
  console.log(board[0][0], '|', board[0][1], '|', board[0][2]);
  console.log('---------');
  console.log(board[1][0], '|', board[1][1], '|', board[1][2]);
  console.log('---------');
  console.log(board[2][0], '|', board[2][1], '|', board[2][2]);
};

const swapPlayer = () => player === 'X' ? player = 'O' : player = 'X';

const playMove = (move) => {
  board.forEach((row, i) => {
    row.forEach((spot, j) => {
      if (move === spot) {
        board[i][j] = player.slice();
        swapPlayer();
      }
    });
  });
};

const endGame = () => {
  swapPlayer();
  printBoard();
  console.log(`Game Over! ${player} wins!`);
  rl.close();
};

const checkWin = () => {
  const isRowWin = () => {
    for (let i = 0; i < 3; i += 1) {
      let row = board[i].toString();
      if (row === 'X,X,X' || row === 'O,O,O') {
        win = true;
      }
    }
  };

  const isColWin = () => {
    for (let i = 0; i < 3; i += 1) {
      let col = [board[0][i], board[1][i], board[2][i]].toString();
      if (col === 'X,X,X' || col === 'O,O,O') {
        win = true;;
      }
    }
  };

  const isDiagWin = () => {
    let majDiag = [board[0][0], board[1][1], board[2][2]].toString();
    let minDiag = [board[0][2], board[1][1], board[2][0]].toString();

    if (majDiag === 'X,X,X' || majDiag === 'O,O,O') win = true;
    if (minDiag === 'X,X,X' || minDiag === 'O,O,O') win = true;
  };

  isRowWin();
  isColWin();
  isDiagWin();
};

const promptPlayer = () => {
  printBoard();
  rl.question(`${player}'s turn. Please choose a number: `, (newMove) => {
    playMove(newMove);
    checkWin();

    if (win) {
      endGame();
    } else {
      promptPlayer();
    }
  });
};

// -------- initialize game -------- //
promptPlayer();
