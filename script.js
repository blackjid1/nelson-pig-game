'use strict';
const rollDice = document.querySelector('.dice');
const newgame = document.querySelector('.new-game');
const hold = document.querySelector('.hold');
const nowscore0 = document.querySelector('#current--0');
const nowscore1 = document.querySelector('#current--1');
const totalscore1 = document.querySelector('.total-score0');
const totalscore2 = document.querySelector('.total-score1');
const dices = document.querySelector('.dices');

let activeplayer, currentscore, scores, playing;

function run() {
  nowscore0.textContent = 0;
  nowscore1.textContent = 0;
  totalscore1.textContent = 0;
  totalscore2.textContent = 0;
  scores = [0, 0];
  activeplayer = 0;
  currentscore = 0;
  playing = true;
  document.querySelector(`.left`).classList.remove('player-winner');
  document.querySelector(`.right`).classList.remove('player-winner');
  document.querySelector(`.winner0`).classList.add('hidden');
  document.querySelector(`.winner1`).classList.add('hidden');
  document.querySelector(`.right`).classList.remove('win');
  document.querySelector(`.left`).classList.add('win');
  dices.classList.add('hidden');
}

run();

rollDice.addEventListener('click', function name(params) {
  if (playing) {
    const ran = Math.trunc(Math.random() * 6) + 1;
    dices.src = `dice-${ran}.png`;
    currentscore += ran;
    document.querySelector(`#current--${activeplayer}`).textContent =
      currentscore;
    dices.classList.remove('hidden');

    if (ran !== 1) {
    } else {
      document.querySelector(`#current--${activeplayer}`).textContent = 0;
      currentscore = 0;
      activeplayer = activeplayer === 0 ? 1 : 0;
      document.querySelector(`.right`).classList.toggle('win');
      document.querySelector(`.left`).classList.toggle('win');
    }
  }
});

hold.addEventListener('click', function name(params) {
  if (playing) {
    scores[activeplayer] += currentscore;
    document.querySelector(`.total-score${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player-winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('win');
      document
        .querySelector(`.winner${activeplayer}`)
        .classList.remove('hidden');
    } else {
      document.querySelector(`#current--${activeplayer}`).textContent = 0;
      currentscore = 0;
      activeplayer = activeplayer === 0 ? 1 : 0;
      document.querySelector(`.right`).classList.toggle('win');
      document.querySelector(`.left`).classList.toggle('win');
    }
  }
});

newgame.addEventListener('click', function name(params) {
  run();
});
