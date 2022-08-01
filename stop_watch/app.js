// Var for Buttons
const strStp = document.querySelector(".start");
const resBtn = document.querySelector(".reset")
const sstp = document.getElementById("sstp");

// Var for time values
let sec = 0;
let min = 0;
let hour = 0;
let timr = document.querySelector(".timer");

// leading values
let leadSec = 0;
let leadMin = 0;
let leadHour = 0;

// var for inetrval and status
let timerInterval = null;
let stat = "stopped"; 

// Stop watch function
function stopWatch() {
    sec++;

    if(sec/60 === 1){
        sec = 0;
        min++;

        if(min/60 === 1){
            min = 0;
            hour++;
        }
    }

    if(sec < 10){
        leadSec = "0" + sec;
    }else{
        leadSec = sec;
    }
    if(min < 10){
        leadMin = "0" + min;
    }else{
        leadMin = min;
    }
    if(hour < 10){
        leadHour = "0" + hour;
    }else{
        leadHour = hour;
    }

    timr.innerText = leadHour + ":" + leadMin + ":" + leadSec;
}

console.log(sstp);
strStp.addEventListener("click", function (){
    setBtn();
})

function setBtn(){
    if(sstp.getAttribute("alt") == "play"){
        sstp.setAttribute("alt", "pause");
        sstp.setAttribute("src", "pics/pause.png");
        timerInterval = window.setInterval(stopWatch, 1000) //The setInterval() method calls a function at specified intervals (in milliseconds).
    }
    else{
        sstp.setAttribute("alt", "play");
        sstp.setAttribute("src", "pics/play-button.png");
        window.clearInterval(timerInterval);
    }
}

resBtn.addEventListener("click", function (){
    sec = 0; min = 0; hour = 0;
    timr.innerText = "00:00:00";
})