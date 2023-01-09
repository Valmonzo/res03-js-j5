let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        name: "Marsh Obrien"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        name: "Rios Gibson"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        name: "Morgan Buchanan"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        name: "Franklin Dyer"
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        name: "Keller Pitts"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        name: "Davenport Maddox"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        name: "Judith Graves"
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        name: "Hoffman Hess"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        name: "Sheena Goff"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        name: "Rose Lawrence"
    }
];

function newUsers(users) {
    for(user of users) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let a1 = document.createElement("a");
        let a2 = document.createElement("a");
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        let span3 = document.createElement("span");
        let span4 = document.createElement("span");
        let tbody = document.querySelector("#homepage main section table tbody");
        console.log(tbody);
        let button = document.createElement("button");

        td1.textContent= user.id;
        td2.textContent = user.name;
        td3.textContent = user.age;
        span1.setAttribute("class", "bi-person-fill-down");
        span2.setAttribute("class", "bi-eye");
        span3.setAttribute("class", "bi-pen");
        span4.setAttribute("class", "bi-trash3");

        td4.appendChild(span1);
        a1.appendChild(span2);
        a2.appendChild(span3);
        button.appendChild(span4);
        td5.appendChild(a1);
        td5.appendChild(a2);
        td5.appendChild(button)

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        tbody.appendChild(tr);



    }
}


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
    let main = document.querySelector("#homepage > main section")
    console.log(main);

    button.addEventListener("click", function(){
        aside.classList.toggle("hidden");
        section.classList.toggle("border");
        section.classList.toggle("border-right");
        main.classList.toggle("large");
    })
}

window.addEventListener("DOMContentLoaded", function() {
    menuDeroulant();
    navBar();
    newUsers();
})