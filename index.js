// document.querySelectorAll(".drum").forEach((item) => {     Another method to count the number of buttons.
//   item.addEventListener("click", function () {

var numberOfButtons = document.querySelectorAll(".drum").length; // Select all the buttons and count the Number

for (var i = 0; i < numberOfButtons; i++) {
  // loop the function base on the number of buttons

  // For this time, we have 7 buttons, so this function will be looped 7 times

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML; // this. trigger the event.

    // this.     this statement tells you what trigger the listener
    // In order to know what button is pressed, you use "this" selector

    /* 
The "this" selector will add a value of whatever is inside of the HTML 
of the button pressed.

*/

    makeDrumSound(buttonInnerHTML);
  });
}

document.addEventListener("keydown", (event) => {
  makeDrumSound(event.key);
});

function makeDrumSound(key) {
  switch (key) {
    case "w": // case name
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break; // exit this case

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(event);
      break;
  }
}
