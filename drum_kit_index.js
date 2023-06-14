var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//detecting button press
for(var i =0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        // this.innerHTML = s;
        // s = s.substring(0,1);
        // var buttonInnerHTML = s;
        buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    }
//detecting key press
document.addEventListener("keydown", function(event){
    
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "a":
            var audio = new Audio("sounds/clap.wav");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/hihat.wav");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/kick.wav");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/openhat.wav");
            audio.play();
            break;
        case "g":
            var audio = new Audio("sounds/boom.wav");
            audio.play();
            break;
        case "h":
            var audio = new Audio("sounds/ride.wav");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tink.wav");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom.wav");
            audio.play();
            break;
        
        default: console.log("Enter correct buttom. please!!")
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}