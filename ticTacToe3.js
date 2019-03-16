const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// -------- state -------- //

let player = 'X';

let win = false;

let playableMoves = 9;

// -------- utils -------- //

const promptPlayer = () => {
  rl.question(`Question`, (answer) => {
    console.log(answer);
  
    rl.close();
  });
}

// -------- initialize game -------- //
promptPlayer();
