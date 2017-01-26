var AWS        = require('aws-sdk');
AWS.config.update({
  region: "us-east-1",
  endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});

var storage = (function(){
  var dynamodb = new AWS.DynamoDB.DocumentClient();
  return{
    getQuote: function(session, callback){
      var params = {
        TableName: 'Motivate',
        Key: {
          Number: 1
        }
      };
      console.log("Quote parameters defined");
      try{
        dynamodb.get(params, function(err, data){
          console.log("Fetching your quote!");
          var quoteData = [data.Item.author, data.Item.quote];
          callback(quoteData);
        });
      } catch(error){
        context.fail("Error Occured: " + error);
      }
    }
  }
})();

module.exports = storage;
