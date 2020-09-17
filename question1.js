'use strict'

function askUserName(){
  var userName = prompt("What's your name prisoner?");
  document.write(userName.toLowerCase());
  // return userName;
}

function areYoudovahkin(){
  var questionAnswer = prompt("Are you the Dovahkin?");
    document.write("Did you take my sweet roll?!");
}

function AskTime(){
  var confirmAnswer = confirm("Press here if you took my sweet roll?");
  if (confirmAnswer){
    alert("Give back my sweet roll, you mudcrab!");
  } else {
    alert("Had a stent in the theives guild huh?")
  }

}



// var userName1 = askUserNameQuestion();
// var userName2 = askUserNameQuestion();
// console.log(userName1);
// console.log(userName2);

// if (userName1 === 'Rena'){
//     document.write('Dovahkin ' + userName1)
// } else {
//     document.write('MudCrab ' + userName1);
// }