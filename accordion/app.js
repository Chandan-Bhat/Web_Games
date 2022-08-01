let cont = document.getElementsByClassName("container");
console.log(cont.length)

for(i = 0; i < cont.length; i++) {

    cont[i].addEventListener("click", function (){
        this.classList.toggle('active'); //this refers to an object that is being invoked (used or called)
    })
};