'use strict';
var storage = require('./storage');

var registerEventHandlers = function (eventHandlers, skillContext) {
    eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
        //if user said a one shot command that triggered an intent event,
        //it will start a new session, and then we should avoid speaking too many words.
        skillContext.needMoreHelp = false;
    };

    eventHandlers.onLaunch = function (launchRequest, session, response) {
        //Speak welcome message and ask user questions
        //based on whether there are players or not.
        storage.getQuote(session, function (data) {
          console.log("author: " + data.quoteData.author);
          console.log("quote: " + data.quoteData.quote);
            var speechOutput = data.quoteData.author + " once said " + data.quoteData.quote;
            response.tell(speechOutput);
        });
    };
};
exports.register = registerEventHandlers;
