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
}

const promptPlayer = () => {
  printBoard();
  rl.question(`Question`, (answer) => {
    console.log(answer);
  
    rl.close();
  });
}

// -------- initialize game -------- //
promptPlayer();
