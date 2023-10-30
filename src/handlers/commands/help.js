"use strict";

const helpMsg =
  "Chiama /roll per avere una lista veloce di dadi da giocare.\nAltrimenti scrivi il numero di dadi che vuoi lanciare e il dado\n(es. 1D20).";

const helpHandler = (ctx) => {
  ctx.reply(helpMsg);
};

module.exports = helpHandler;
