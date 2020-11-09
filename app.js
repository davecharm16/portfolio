// console.log("Helloo..");
//Event Listeners


//query selectors
const hero_text = document.querySelector('.hero-text');
const text = "Hello, I am Dave Charm";
const nav_button = document.querySelectorAll(".nav-burger");
const drop_down = document.querySelector(".drop_down");
let i = 0;
const project_image = document.querySelectorAll(".container-project");

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
project_image.forEach(element => {
    element.addEventListener('click', carousel);
});

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


// function rotate_and_pop() {
//     const image = this.firstElementChild.firstElementChild;
//     const div_image = this.firstElementChild;
//     image.style.opacity = '0.99';
//     image.style.transform = 'scale(0.5)';
//     div_image.style.transition = "0.5s all ease";
//     // this.firstElementChild.style.display = "none";
//     // this.lastElementChild.style.display = "block";


// }

//test carousel//



function carousel() {
    // const image = this.firstElementChild.firstElementChild;
    const div_image = this.firstElementChild;
    div_image.style.transform = '0.5 all ease';
    div_image.firstElementChild.style.transform = 'translateX(-110%)';
    div_image.firstElementChild.style.transition = '1s all ease-in-out';
    div_image.lastElementChild.style.transition = '2s all ease-in-out';
    div_image.lastElementChild.style.opacity = 0.99;
}