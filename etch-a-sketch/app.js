const skbox = document.querySelector(".skbox");
console.log(skbox);

for(let i = 0; i < 16*16; i++){
    let dat = document.createElement("div");
    dat.classList.add("pixel");
    dat.addEventListener("mouseover", color);
    skbox.appendChild(dat);
}

let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true;}
document.body.onmouseup = () => {mouseDown = false;}

function color(e){
    if(e.type == "mouseover" && !mouseDown) return;
    else{
        e.target.style.backgroundColor = "#333";
    }
}
