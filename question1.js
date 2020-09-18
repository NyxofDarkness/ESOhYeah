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

function askTime(){
var confirmAnswer = confirm("Press here if you took my sweet roll?");
if (confirmAnswer){
  alert("Give back my sweet roll, you mudcrab!");
} else {
  alert("Had a stent in the theives guild huh?")
}
}


function askUserToEnterNumberLessThanTen(){
  var userAnswer = prompt("enter a number of Arrows < 10");
  if (userAnswer > 10){
    alert("You Mudcrab! Wrong!")
  } else {
    alert("Glory to you Dovakin!")
  }
}

areYoudovahkin();
askTime();
askUserToEnterNumberLessThanTen();

// var userName1 = askUserNameQuestion();
// var userName2 = askUserNameQuestion();
// console.log(userName1);
// console.log(userName2);

// if (userName1 === 'Rena'){
//     document.write('Dovahkin ' + userName1)
// } else {
//     document.write('MudCrab ' + userName1);
// }