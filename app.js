"use strict";

const Telegraf = require("telegraf");
const config = require("./config");
const handlers = require("./src/handlers");

const bot = new Telegraf(config.botToken);

//get username for group command handling
bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username;
  console.log("Initialized", botInfo.username);
});

bot.use(handlers.commands, handlers.hears);

bot.catch((err, ctx) => {
  console.error(err);
  return ctx.reply("uhm... riprova");
});

// execute not AWS Lambda
bot.launch()

// --------------------- AWS Lambda handler function ---------------------------------------------------------------- //
// https://github.com/telegraf/telegraf/issues/129
// exports.handler = (event, context, callback) => {
//   bot.handleUpdate(JSON.parse(event.body)); // make Telegraf process that data
//   return callback(null, {
//     statusCode: 200,
//     body: JSON.stringify({ message: "OK" }),
//   });
// };
