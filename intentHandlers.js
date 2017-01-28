'use strict';
var storage = require('./storage');

var registerIntentHandlers = function (intentHandlers, skillContext) {

    intentHandlers.GetQuoteIntent = function (intent, session, response) {
        //tells the scores in the leaderboard and send the result in card.
        storage.getQuote(session, function (data) {
            var speechOutput = data.author + " once said " + data.quote;
            response.tell(speechOutput);
        });
    };

    intentHandlers['AMAZON.HelpIntent'] = function (intent, session, response) {
        var speechOutput = textHelper.completeHelp;
        if (skillContext.needMoreHelp) {
            response.ask(textHelper.completeHelp + ' So, how can I help?', 'How can I help?');
        } else {
            response.tell(textHelper.completeHelp);
        }
    };

    intentHandlers['AMAZON.CancelIntent'] = function (intent, session, response) {
        if (skillContext.needMoreHelp) {
            response.tell('Okay.  Whenever you\'d like you can ask me to motivate you.');
        } else {
            response.tell('');
        }
    };

    intentHandlers['AMAZON.StopIntent'] = function (intent, session, response) {
        if (skillContext.needMoreHelp) {
            response.tell('Okay.  Whenever you\'d like you can ask me to motivate you.');
        } else {
            response.tell('');
        }
    };
};
exports.register = registerIntentHandlers;
