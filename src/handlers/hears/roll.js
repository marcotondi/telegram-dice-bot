"use strict";

const serviceDice = require("../../service/rollService");

const rollHandler = (ctx) => {
  const command = ctx.match['input'];
  const rule = command.toUpperCase().split("D");

  var dice = serviceDice.rollDice(rule[0], rule[1]);
  var sum = serviceDice.sumDice(dice);

  var name = ctx.message.from.username || ctx.message.from.first_name;

  console.log("Roll", name, command);

  return ctx.reply(`${name} roll\n[${dice.join(", ")}] = ${sum}`);
};

module.exports = rollHandler;
