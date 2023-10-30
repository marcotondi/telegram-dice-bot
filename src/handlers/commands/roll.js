"use strict";

//const Extra = require("telegraf/extra");
const Markup = require("telegraf/markup");

const inlineKey = Markup.keyboard([
  ["1D4", "2D4", "3D4"],
  ["1D6", "2D6", "3D6"],
  ["1D8", "2D8", "3D8"],
  ["1D10", "2D10", "3D10"],
  ["1D12", "2D12", "3D12"],
  ["1D20", "2D20", "3D20"],
])
  .oneTime()
  .resize()
  .extra();

const rollHandler = (ctx) => {
  return ctx.reply("dadi", inlineKey);
};

module.exports = rollHandler;
