'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Número Correto!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Funções
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (scoreText) {
  document.querySelector('.score').textContent = scoreText;
};
const displayNumber = function (numberText) {
  document.querySelector('.number').textContent = numberText;
};
//

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //Quando não tem nenhum número
  if (!guess) {
    displayMessage('No Number 😡🛑');

    //Quando o jogador ganha
  } else if (guess === secretNumber) {
    displayMessage('🎉 Número Correto!');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Quando o número é muito alto
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Alto!' : '📉 Baixo!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost de Game!');
      displayScore('0');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Comece a procurar...');
  document.querySelector('.guess').value = '';
  displayNumber('?');
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
