// global variables
let timeLeft= 0,
    sitting = false,
    display,
    counting;

//TODO Implement chrome storage and load defaults on document load
/*
    document.addEventListener("DOMContentLoaded", function(){
        headline.innerHTML = "I am loaded";
    });
*/


//selecting elements
const headline = document.getElementById("headline"),
    countdown = document.getElementById("countdown"),
    button = document.getElementById("toggleButton"),
    add1 = document.getElementById("add-time-1"),
    add2 = document.getElementById("add-time-2"),
    add3 = document.getElementById("add-time-3");

//listen to this events
button.addEventListener("click", toggleTimer);
add1.addEventListener("click", addTime1);
add2.addEventListener("click", addTime2);
add3.addEventListener("click", addTime3);

//on button click toggle timer
function toggleTimer() {
    if(!sitting){
        sitting = true;
        button.innerText = "Stand Up";
        counting = setInterval(() => {
            timeLeft--;
            displayTime();
        }, 1000);
        
    } else{
        button.innerText = "Sit Down";
        sitting = false;
        clearInterval(counting);
        
    }
}
///display converted seconds into minutes and seconds
function displayTime() {
    let sec = timeLeft % 60;
    let min = Math.floor(timeLeft / 60);
    if(timeLeft > 0){
        countdown.innerText = min + ":" + sec;
    }else{
        sec = sec * -1;
        countdown.innerText = min + ":" + sec;
    }
    
}
//on add time button click add time to timeLeft
function addTime1(){
    timeLeft += 1800;
    displayTime();
}
function addTime2(){
    timeLeft += 1800;
    displayTime();
}
function addTime3(){
    timeLeft += 2400;
    displayTime();
}