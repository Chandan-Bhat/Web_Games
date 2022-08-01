const hidText = document.querySelector(".hidden-cont");
const cli = document.querySelector(".read");

function reveal(){
    if(hidText.classList.contains("showing")){
        hidText.classList.remove("showing");
    }
    else{
        hidText.classList.add("showing");
    }
}

if(cli){
    cli.addEventListener("click", reveal);
}