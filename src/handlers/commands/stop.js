"use strict";

const { Markup } = require("telegraf/extra");

const inlineKey = Markup.removeKeyboard(true);

const stopHandler = (ctx) => {
  ctx.reply("Ma va là e tira un dado (¬_¬)", inlineKey);
};

module.exports = stopHandler;
