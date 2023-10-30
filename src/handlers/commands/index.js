"use strict";

const { Composer } = require("telegraf");

const startHandler = require("./start");
const stopHandler = require("./stop");
const aboutHandler = require("./about");
const helpHandler = require("./help");
const rollHandler = require("./roll");

const composer = new Composer();

composer.command("start", startHandler);
composer.command("stop", stopHandler);
composer.command("about", aboutHandler);
composer.command("help", helpHandler);
composer.command("roll", rollHandler);

module.exports = composer;
