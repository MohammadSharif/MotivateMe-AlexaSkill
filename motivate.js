'use strict';
var AlexaSkill = require('./AlexaSkill'),
    eventHandlers = require('./eventHandlers'),
    intentHandlers = require('./intentHandlers');

var APP_ID = "amzn1.ask.skill.[unique-value-here]";
var skillContext = {};

var Motivator = function () {
    AlexaSkill.call(this, APP_ID);
    skillContext.needMoreHelp = true;
};


// Extend AlexaSkill
Motivator.prototype = Object.create(AlexaSkill.prototype);
Motivator.prototype.constructor = Motivator;

eventHandlers.register(Motivator.prototype.eventHandlers, skillContext);
intentHandlers.register(Motivator.prototype.intentHandlers, skillContext);

module.exports = Motivator;
