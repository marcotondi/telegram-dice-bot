"use strict";

//const { registerUser } = require("../../service/dataService");

var m = "Ciao :)\ndigita /help per scoprire come usarmi ;)";

const startHandler = (ctx) => {
//  registerUser(ctx);

  ctx.reply(m);
};

module.exports = startHandler;
