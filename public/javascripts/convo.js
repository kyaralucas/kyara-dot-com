
var botui = new BotUI('api-bot');

var socket = io.connect('http://localhost:8010');
// read the BotUI docs : https://docs.botui.org/

botui.message.add({
  content: 'Hello! 😁',
  delay: 500,
}).then(botui.message.add({
  content: "I'm Kyara Lucas",
  delay: 2000,
})).then(botui.message.add({
  content: 'a data scientist from Curaçao, currently based in Amsterdam 🇳🇱',
  delay: 3500,
})).then(botui.message.add({
  content: "What's up?",
  delay: 5000,
})).then(function () {
  botui.action.text({
    delay: 5500,
    action: {
      placeholder: 'Ask me a question...', }
  })
}).then(function () {

  setTimeout(initiate, 6000);

}).then(function () {
  botui.action.text({
    delay: 5500,
    action: {
      placeholder: 'Ask me a question...', }
  }).then(function (res) {
  socket.emit('fromClient', { client : res.value }); // sends the message typed to server
    console.log(res.value); // will print whatever was typed in the field.
  }).then(function () {
    socket.on('fromServer', function (data) { // recieveing a reply from server.
      console.log(data.server);
      newMessage(data.server);
      // window.scrollTo(0, document.querySelector(".scroll").scrollHeight);
      addAction();
  })
});
})

function newMessage (response) {
  botui.message.add({
    content: response,
    delay: 600,
    loading: true,
  })
}

function addAction () {
  botui.action.text({
    action: {
      size: 80,
      placeholder: 'Ask me a question..', 
    }
  }).then(function (res) {
    socket.emit('fromClient', { client : res.value });
    console.log('client response: ', res.value);
  })
}

var text = "What do you do?"
var l=text.length;
var current = 0;
var time = 100;

var write_text = function(input) {
  var input = document.querySelectorAll("input")[0];
  input.value+=text[current];
  if(current < l-1) {
    current++;
    setTimeout(function(){write_text()},time);
  } else {
    input.setAttribute('value',input.value);
    console.log(input.value);
  }
}

var initiate = function () {
  console.log('Function initiated!');
  var input = document.querySelectorAll("input")[0];
  console.log(input)
  console.log(input)
  input.select();
  input.value="";
  setTimeout(function(){write_text(input)},time);

}
  
