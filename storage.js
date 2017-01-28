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
        TableName: 'MotivateDB',
        Key: {
          ItemValue: Math.floor(Math.random() * 26)
        }
      };
      console.log("Quote parameters defined");
      dynamodb.get(params, function(err, data){
        console.log("Fetching your quote!");
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        callback(data.Item);
      });

    }
  }
})();

module.exports = storage;
