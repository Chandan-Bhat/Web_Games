const DEFAULT_COLOR = "#333";
let curColor = DEFAULT_COLOR;
let gridSize = 16;

//DOM elements
const cmode = document.querySelector(".cmode");
const emode = document.querySelector(".emode");
const clear = document.querySelector(".clear");
const picker = document.getElementById("picker");
const sizeDisp = document.getElementById("sizeDisp");
const slider = document.getElementById("slider");
const skbox = document.querySelector(".skbox");

//to implement click and drag
let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true;}
document.body.onmouseup = () => {mouseDown = false;}

//event handlers for setting panel
cmode.addEventListener("click", function() {
    cmode.classList.add("activ");
    emode.classList.remove("activ");
})

emode.addEventListener("click", function() {
    emode.classList.add("activ");
    cmode.classList.remove("activ");
})

clear.addEventListener("click", reloadGrid);

slider.onchange = reloadGrid;

slider.onmousemove = () => {sizeDisp.innerText = `${slider.value}x${slider.value}`;}


//Functions 
function getColor(){
    curColor = picker.value;   //to get the current color picked via picker
}

function inkIt(e){
    if(e.type == "mouseover" && !mouseDown) return;
    if(cmode.classList.contains("activ")){
        getColor();
        e.target.style.background = curColor;
    }
    else if(emode.classList.contains("activ")){
        e.target.style.background = "white";
    }
}

function buildIt(value){
    skbox.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    skbox.style.gridTemplateRows = `repeat(${value}, 1fr)`;

    for(let i = 0; i < value*value; i++){
        let dat = document.createElement("div");
        dat.addEventListener("mouseover", inkIt);
        dat.addEventListener("mousedown", inkIt);
        skbox.appendChild(dat);
    }
}

function clrGrid(){
    skbox.innerHTML = "";
}

function reloadGrid(){
    clrGrid();
    buildIt(slider.value);
}

//things to while loading the page
window.onload = () => {
    reloadGrid();
}
