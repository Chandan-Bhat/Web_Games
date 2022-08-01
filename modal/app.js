// Variables

let openBtn = document.getElementById("btn");
let modalCont = document.getElementById("modal-cont");
let closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", function (){

    modalCont.style.display = 'block';
})

closeBtn.addEventListener("click", function (){

    modalCont.style.display = 'none';
})

//window is the highest object in the DOM tree

window.addEventListener("click", function (e){

    if(e.target === modalCont){
        modalCont.style.display = 'none';
    }
})