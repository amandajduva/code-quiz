// timer
let timeEl = document.querySelector(".timer");
let secondsLeft = 75;

function setTime() {
    timeEl.addEventListener("click", function() {
        setInterval();
    });

    let timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // when time is out -- gameover and redirected to enter initials
          // call function for gameover
        }
    
      }, 1000);
}
// create gameover function
setTime();