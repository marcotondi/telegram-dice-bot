"use strict";

function roll(face) {
  return Math.floor(Math.random() * face) + 1;
}

function rollDice(num, face) {
  var dice = [];
  for (let i = 0; i < num; i++) {
    dice.push(roll(face));
  }
  return dice;
}

function sumDice(dice) {
  const sum = (accumulator, currentValue) => accumulator + currentValue;

  return dice.reduce(sum);
}

module.exports = {
  rollDice,
  sumDice,
};
