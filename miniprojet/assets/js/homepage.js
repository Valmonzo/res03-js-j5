function menuDeroulant() {

let sousMenu = document.querySelectorAll("#homepage main aside nav ul");
let menu = document.querySelectorAll("#homepage main aside nav h2");

for(let i=0; i<menu.length; i++) {
    menu[i].addEventListener("click", function(e) {
        sousMenu[i].classList.toggle("show");
    })
}


}

function navBar() {
    let button = document.querySelector("#homepage > header section button");
    let aside = document.querySelector("#homepage > main aside");
    let section = document.querySelector("#homepage > header > section");

    button.addEventListener("click", function(){
        aside.classList.toggle("hidden");
        section.classList.toggle("border");
        section.classList.toggle("border-right");
    })
}

window.addEventListener("DOMContentLoaded", function() {
    menuDeroulant();
    navBar();
})