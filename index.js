var numberofButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var wordClick = this.innerHTML;
    makeSound(wordClick);
    buttonAnimation(wordClick);
  });
}
// detacting keyboardpress
document.addEventListener("keypress",function(event){
  makeSound(event.key)
  buttonAnimation(event.key);
});

function makeSound(key){
  // var wordkeyPress = event.key;
  // console.log(wordkeyPress)
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
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
      break;
  }
}

function buttonAnimation(currentKey){
 document.querySelector("."+currentKey).classList.add("pressed");
 setTimeout(() => {
  document.querySelector("."+currentKey).classList.remove("pressed");
}, 100);
};

// var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
