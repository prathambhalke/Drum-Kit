window.addEventListener("keydown",PlaySound);


function PlaySound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    const Key = document.querySelector(`.Key[data-key="${e.keyCode}"]`);

    if(!audio) return; //stops the playing when clck on another key
    Key.classList.add("playing")
    audio.currentTime = 0; // play the audio from start
    audio.play();
}

const Keys = document.querySelectorAll(".Key");

function removeTransition(e){
    // if(e.propertyName !== 'transform') return
    e.target.classList.remove("playing")
}

Keys.forEach(Key => Key.addEventListener("transitionend", removeTransition));
