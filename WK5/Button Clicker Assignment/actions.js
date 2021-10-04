console.log("JavaScript file connected");

function message(){
    alert('Ninja was liked');
}

let add =document.querySelector('.defbtn')
function addDef() {
    add.remove()
}

let newnumber = 0
let jsnumber= document.querySelector("#jsnumber");
function addLikes() {
    newnumber++
    jsnumber.innerText = newnumber
}

function loginbtn () {
let changelogin = document.querySelector(".loginword");
let newlogin = "Logout"
changelogin.innerText = newlogin
}
