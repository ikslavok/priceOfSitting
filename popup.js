//variables
let counting;

//selecting elements
const headline = document.getElementById("headline"),
    countdown = document.getElementById("countdown"),
    button = document.getElementById("toggleButton"),
    reset = document.getElementById("resetButton"),
    add1 = document.getElementById("add-time-1"),
    add2 = document.getElementById("add-time-2"),
    add3 = document.getElementById("add-time-3");

//listen to this events
button.addEventListener("click", toggleTimer);
reset.addEventListener("click", resetTimer);
add1.addEventListener("click", addTime1);
add2.addEventListener("click", addTime2);
add3.addEventListener("click", addTime3);

displayTime();


//TODO Implement chrome storage and load defaults on document load


//on button click toggle timer
function toggleTimer() {
    chrome.storage.sync.get(["sitting", "timeLeft"], ({sitting, timeLeft}) => {
        if(!sitting){
            headline.innerText = "You are sitting now.";
            button.innerText = "Stand Up";
            chrome.storage.sync.set({sitting : true});
            counting = setInterval(() => {
                chrome.storage.sync.set({timeLeft : timeLeft--});
                    displayTime();
                }, 1000);
        } else{
            button.innerText = "Sit Down";
            headline.innerText = "You just stood up for yourself.";
            chrome.storage.sync.set({sitting : false});
            clearInterval(counting);
            
        }
    });
}
///display converted seconds into minutes and seconds
function displayTime() {
    chrome.storage.sync.get("timeLeft", ({timeLeft}) =>{
        let sec = timeLeft % 60;
        let min = Math.floor(timeLeft / 60);
        if(timeLeft > 0){
            countdown.innerText = min + ":" + sec;
        }else{
            countdown.innerText = min + ":" + sec * -1;
        }
    });    
}
//on add time button click add time to timeLeft
function addTime1(){
    chrome.storage.sync.get("timeLeft", ({timeLeft}) =>{
        chrome.storage.sync.set({timeLeft : timeLeft += 1800});
        displayTime();
    });
}
function addTime2(){
    chrome.storage.sync.get("timeLeft", ({timeLeft}) =>{
        chrome.storage.sync.set({timeLeft : timeLeft += 1800});
        displayTime();
    });
}
function addTime3(){
    chrome.storage.sync.get("timeLeft", ({timeLeft}) =>{
        chrome.storage.sync.set({timeLeft : timeLeft += 2400});
        displayTime();
    });
}
//reset timer
function resetTimer(){
    clearInterval(counting);
    chrome.storage.sync.set({timeLeft : 0});
    displayTime();
}