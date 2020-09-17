var hourNow = prompt('What time is it, friend? 0-23'); 
var greeting;

if (hourNow > 18 && hourNow < 24) {
  greeting = 'Arkay welcomes you!';
} else if (hourNow > 12 && hourNow < 24) {
  greeting = 'Akatosh wishes you good sun!';
} else if (hourNow >= 0 && hourNow < 24) {
  greeting = 'Azura demands your time!';
} else {
  greeting = 'By the nine! Hircine acted up! Please try again.';
}

document.write(greeting);