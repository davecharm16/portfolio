// console.log("Helloo..");
//Event Listeners


//query selectors
const hero_text = document.querySelector('.hero-text');
const text = "Hello, I am Dave Charm";
const nav_button = document.querySelectorAll(".nav-burger");
const drop_down = document.querySelector(".drop_down");
let i = 0;


var arr = text.split("");
arr.forEach(letters => {
    let sp = document.createElement("span");
    let letter = document.createTextNode(letters);
    sp.appendChild(letter);
    hero_text.appendChild(sp);
});

let time = setInterval(type, 300);

function type() {
    let span = hero_text.querySelectorAll("span")[i];
    if (i > 0) {
        let spanBef = hero_text.querySelectorAll("span")[i - 1];
        spanBef.classList.remove("type");
    }
    span.classList.add("appear");
    span.classList.add("type");
    console.log(span);
    i++;
    if (i === text.length) {
        hero_text.innerHTML = text;
        complete();
        return;
    }
}

function complete() {
    clearInterval(time);
    time = null;
}



/*event listener*/

nav_button[0].addEventListener("click", drop_close);
nav_button[1].addEventListener("click", drop);


console.log(nav_button);
/*nav -funct */

function drop() {
    nav_button[1].classList.add("close");
    nav_button[0].classList.remove("close");
    drop_down.classList.remove("close");
}

function drop_close() {
    nav_button[0].classList.add("close");
    nav_button[1].classList.remove("close");
    drop_down.classList.add("close")
}