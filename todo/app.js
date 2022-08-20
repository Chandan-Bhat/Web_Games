const add1 = document.getElementById("add");
const txtInp = document.getElementById("inp");
const cont = document.getElementById("cont");

//console.log(add1, txtInp, cont);

add1.addEventListener("click", addTask);

function addTask() {
    let task = document.createElement("div");
    task.classList.add("task"); 

    let done = document.createElement("button");
    done.classList.add("btn");
    done.setAttribute("id", "dne");
    done.innerText = "Done";

    let del = document.createElement("button");
    del.classList.add("btn");
    del.setAttribute("id", "del");
    del.innerText = "Delete";

    let txt = document.createElement("p");
    txt.classList.add("txt");

    txt.innerText = txtInp.value;
    task.appendChild(txt);
    task.appendChild(done);
    task.appendChild(del);

    cont.appendChild(task);
}

document.addEventListener("click", function(e) {
    const elem = e.target;
    //console.log(elem);

    if(elem.classList.contains("btn")){
        let pat = elem.parentElement;
        console.log(pat);
        if(elem.getAttribute("id") == "dne"){
            pat.firstChild.style.textDecoration = "line-through";
        }

        if(elem.getAttribute("id") == "del"){
            pat.remove();
        }
    }
})
