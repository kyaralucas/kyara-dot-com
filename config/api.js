
var key = '1234567';
var apiai = require('apiai');

// read the api.ai docs : https://api.ai/docs/

//Enter your API Key
var app = apiai('1234567');

// Function which returns speech from api.ai
var getRes = function(query) {
  var request = app.textRequest(query, {
      sessionId: '12345678'
  });
const responseFromAPI = new Promise(
        function (resolve, reject) {
request.on('error', function(error) {
    reject(error);
    // console.log(error);
});
request.on('response', function(response) {
  resolve(response.result.fulfillment.speech);
});
});
request.end();
return responseFromAPI;
};

// test the command :
//getRes('hello').then(function(res){console.log(res)});

module.exports = {getRes}
