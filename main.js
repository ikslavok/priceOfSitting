let timeLeft= 0,
    sitting = false,
    counting;
const headline = document.getElementById("headline"),
    countdown = document.getElementById("countdown"),
    button = document.getElementById("toggleButton"),
    add1 = document.getElementById("add-time-1"),
    add2 = document.getElementById("add-time-2"),
    add3 = document.getElementById("add-time-3");

countdown.innerHTML = timeLeft;

button.addEventListener("click", toggleTimer);
add1.addEventListener("click", addTime1);
add2.addEventListener("click", addTime2);
add3.addEventListener("click", addTime3);

function countDown() {
    timeLeft -= 1;
    countdown.innerHTML = timeLeft;
}


function toggleTimer() {
    if(!sitting){
        counting = setInterval(countDown, 1000);
        sitting = true;
        headline.innerHTML = "You have this much time left:";
        button.innerHTML = "Stand Up";
    } else{
        sitting = false;
        clearInterval(counting);
        headline.innerHTML = "You have this much time left:";
        button.innerHTML = "Sit down";
    }
}
function addTime1(){
    timeLeft += 30;
    countdown.innerHTML = timeLeft;
}
function addTime2(){
    timeLeft += 30;
    countdown.innerHTML = timeLeft;
}
function addTime3(){
    timeLeft += 60;
    countdown.innerHTML = timeLeft;
}