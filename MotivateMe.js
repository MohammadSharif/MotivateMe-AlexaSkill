storage = require("./storage");

exports.handler = (event, context, callback) => {
        try {
        // TODO implement
        var quotes = [
          "Life is 10% what happens to you and 90% how you react to it.",
          "Good, better, best. Never let it rest. \'Til your good is better and your better is best.",
          "Infuse your life with action. Don\'t wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.",
          "With the new day comes new strength and new thoughts.",
          "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
          "In order to succeed, we must first believe that we can.",
          "Quality is not an act, it is a habit.",
          "Keep your eyes on the stars, and your feet on the ground.",
          "It always seems impossible until it\'s done.",
          "Failure will never overtake me if my determination to succeed is strong enough.",
          "Always do your best. What you plant now, you will harvest later.",
          "You can\'t cross the sea merely by standing and staring at the water.",
           "If you can dream it, you can do it.",
          "We should not give up and we should not allow the problem to defeat us.",
          "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
          "Don\'t watch the clock; do what it does. Keep going.",
          "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
          "The secret of getting ahead is getting started.",
          "What you do today can improve all your tomorrows.",
          "Problems are not stop signs, they are guidelines.",
          "It does not matter how slowly you go as long as you do not stop.",
          "Start where you are. Use what you have. Do what you can.",
          "There is only one corner of the universe you can be certain of improving, and that\'s your own self.",
          "Accept the challenges so that you can feel the exhilaration of victory.",
          "Setting goals is the first step in turning the invisible into the visible."
        ];

        var authors = [
          "Charles R. Swindoll",
          "St. Jerome",
          "Bradley Whitford",
          "Eleanor Roosevelt",
          "Helen Keller",
          "Nikos Kazantzakis",
          "Aristotle",
          "Theodore Roosevelt",
          "Nelson Mandela",
          "Og Mandino",
          "Og Mandino",
          "Rabindranath Tagore",
          "Walt Disney",
          "A. P. J. Abdul Kalam",
          "Norman Vincent Peale",
          "Sam Levenson",
          "Ayn Rand",
          "Mark Twain",
          "Ralph Marston",
          "Robert H. Schuller",
          "Confucius",
          "Arthur Ashe",
          "Aldous Huxley",
          "George S. Patton",
          "Tony Robbins"
      ];

      quote_index = Math.floor(Math.random() * 25);



      // var author = authors[quote_index];
      // var quote = quotes[quote_index];



        if(event.session.new) {
            // New Session
            console.log("New Session")
        }

        switch(event.request.type){
            case "LaunchRequest":
            // Launch Request
            console.log("Launch Request")
            storage.getQuote(event.session, function(quoteData){
              console.log(quoteData[0] + " once said " + quoteData[1])
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(quoteData[0] + " once said " + quoteData[1], true),
                  {}
                )
              )
            });

            break;



        //     case "IntentRequest":
        //     // Intent Request
        //     switch(event.request.intent.name) {
        //       case "BeginNotifying":
        //         var date = new Date()
        //
        //         break;
        //
        //       case "StopNotifying":
        //
        //         break;
        //
        //       default:
        //         throw "Invalid intent"
        // }
        //     console.log("Intent Request")
        //     break;

            case "SessionEndedRequest":
            // Session Ended Request
            console.log("Session Ended Request")
            break;

            default:
                context.fail('Invalid Request Type: ${event.request.type}')
        }




} catch(error) { context.fail('Exception: ' + error) }

};


// Helpers
buildSpeechletResponse = (outputText, shouldEndSession) => {

  return {
    outputSpeech: {
      type: "PlainText",
      text: outputText
    },
    shouldEndSession: shouldEndSession
  }

}

generateResponse = (speechletResponse, sessionAttributes) => {

  return {
    version: "1.0",
    sessionAttributes: sessionAttributes,
    response: speechletResponse
  }

}
