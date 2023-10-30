"use strict";

const { Composer } = require("telegraf");

const rollHandler = require("./roll");
const composer = new Composer();

composer.hears(/\dD(\d+)/gi, rollHandler);

module.exports = composer;
