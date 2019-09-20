
var botui = new BotUI('api-bot');

// read the BotUI docs : https://docs.botui.org/

botui.message.add({
  content: 'Hello!',
  delay: 500,
}).then(botui.message.add({
  content: "I'm Kyara Lucas",
  delay: 2000,
})).then(botui.message.add({
  content: 'a data scientist from Curaçao, currently based in Rotterdam',
  delay: 3500,
})).then(botui.message.add({
  content: "What's up?",
  delay: 5000,
})).then(function () {
  botui.action.text({
    delay: 5500,
    action: {
      placeholder: '...',}
  })
}).then(function () {

  setTimeout(initiate, 6000);

}).then(botui.message.add({  
    human: true,
    content: 'What do you do?',
    delay: 8500,
  })
).then(firstText()).then(secondText()).then(thirdText())

function newMessage (response) {
  botui.message.add({
    content: response,
    delay: 600,
    loading: true,
  })
}

// function addAction () {
//   botui.action.text({
//     action: {
//       size: 80,
//       placeholder: 'Ask me a question..', 
//     }
//   }).then(function (res) {
//     socket.emit('fromClient', { client : res.value });
//     console.log('client response: ', res.value);
//   })
// }

function firstText () {
  return new Promise(function (){
    setTimeout(function () {
      botui.message.add({
        content: 'I have a degree in Econometrics and nowadays I apply that knowledge to gather all sorts of insights out of data',
        delay: 2000,
        loading: true,
      }).then(botui.action.hide());
    }, 9000);
  })
}

function secondText () {
  return new Promise(function (){
    setTimeout(function () {
      botui.message.add({
        content: 'I enjoy developing data applications like chatbots, but I also like writing data driven articles',
        delay: 2000,
        loading: true,
      });
    }, 11000);
  })
}

function thirdText () {
  return new Promise(function (){
    setTimeout(function () {
      botui.message.add({
        content: 'You can read my most recent article [here](https://kyaralucas.wordpress.com/2018/01/09/who-has-the-most-boring-music-taste-an-analysis-of-spotify-data/)^',
        delay: 2000,
        loading: true,
      }).then(function () {
        chatWindow = document.getElementsByClassName('botui-container')[0]; 
        var xH = chatWindow.scrollHeight; 
        chatWindow.scrollTo(0, xH);
      });
    }, 13000);
  })
}

// function scrollDown () {
//   chatWindow = document.getElementsByClassName('botui-container')[0]; 
//   var xH = chatWindow.scrollHeight; 
//   chatWindow.scrollTo(0, xH);
// }

// function fourthText () {
//   return new Promise(function (){
//     setTimeout(function () {
//       botui.message.add({
//         content: 'Would you like to get in touch?',
//         delay: 1500,
//         loading: true,
//       }).then(function () {
//         chatWindow = document.getElementsByClassName('botui-container')[0]; 
//         var xH = chatWindow.scrollHeight; 
//         chatWindow.scrollTo(0, xH);
//       });
//     }, 15000);
//   })
// }

// .then(botui.action.button({
//   action: [
//     {
//       text: 'Yes!',
//       value: 'Yes!'
//     }, {
//       text: 'Nah..',
//       value: 'Nah..'
//     }
//   ],
//   delay: 5000
// }))

// function fourthText () {
//   return new Promise(function (){
//     setTimeout(function () {
//       botui.message.add({
//         content: 'Would you like to get in touch?',
//         delay: 1500,
//         loading: true,
//       }).then(botui.action.button({
//         action: [
//           {
//             text: 'Yes!',
//             value: 'Yes!',
//           }
//         ]
//       }));
//     }, 15000);
//   })
// }

// .then(function (res){

//   if (res.value == 'Yes!'){
//       console.log(res)
//   }

// })

// function fifthQuestion () {
//   return new Promise(function () {
//     setTimeout(function () {
//       botui.action.button({
//         action: [
//         {
//           text: 'Yes!',
//           value: 'Yes!'
//         },
//         {
//           text: 'Nah..',
//           value: 'Nah'
//         }
//         ]
//       });
//     }, 17000);
//     })
// }

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
  
