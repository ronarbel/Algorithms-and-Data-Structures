const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// -------- state -------- //

let player = 'X';

let win = false;

let playableMoves = 9;

let board = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
];

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
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (board[i][j] === move) {
        board[i][j] = player.slice();
        playableMoves -= 1;
        swapPlayer();
      }
    }
  }
};

const checkWin = () => {
  const checkRow = () => {
    for (let i = 0; i < 3; i += 1) {
      let row = board[i].toString();
      if (row === 'X,X,X' || row === 'O,O,O') win = true;
    }
  };
  const checkCol = () => {
    for (let i = 0; i < 3; i += 1) {
      let col = [board[0][i], board[1][i], board[2][i]].toString();
      if (col === 'X,X,X' || col === 'O,O,O') win = true;
    }
  };

  const checkDiag = () => {
    let majDiag = [board[0][0], board[1][1], board[2][2]].toString();
    let minDiag = [board[0][2], board[1][1], board[2][0]].toString();

    if (majDiag === 'X,X,X' || majDiag === 'O,O,O') win = true;
    if (minDiag === 'X,X,X' || minDiag === 'O,O,O') win = true;
  };

  checkRow();
  checkCol();
  checkDiag();
};

const endWinGame = () => {
  printBoard();
  swapPlayer();
  console.log(`Game Over! ${player} wins!`);
  rl.close();
};

const endTieGame = () => {
  printBoard();
  console.log('Tie game!');
  rl.close();
};

const promptPlayer = () => {
  printBoard();
  rl.question(`${player}'s turn, please choose a number: `, (newMove) => {
    playMove(newMove);
    checkWin();

    if (win) {
      endWinGame();
    } else if (!playableMoves) {
      endTieGame();
    } else {
      promptPlayer();
    }
  });
};

// -------- initialize game -------- //
promptPlayer();
