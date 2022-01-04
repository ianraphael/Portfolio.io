let navIcon = document.getElementById("navIcon");
let navBar = document.getElementById("navBar");
let myPicture = document.getElementById("myPicture"); 
let header = document.getElementsByClassName("main-header");

function changeNav() {
    if (navIcon.src.endsWith("images/bars-solid.svg") == true) {
        navIcon.src = "images/times-solid.svg";
        navBar.style.top = 49
    } else {
        navIcon.src = "images/bars-solid.svg"
        navBar.style.top = 25
    }
}

function changeMyPicture() {
    if (myPicture.src.endsWith("images/ian.jpg") == true) {
        myPicture.src = "images/ian2.jpg";
    }else {
        myPicture.src = "images/ian.jpg";
    }
}

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    console.log(scrolled)
})

function home() {
    scrollTo({top:0, behavior: 'smooth'})
}
if (window.innerWidth > 400) {
    function about() {
        scrollTo({top: 333, behavior:'smooth'})
    }
}else {
    function about() {
        scrollTo({top:600, behavior: 'smooth'})
    }
}

if (window.innerWidth > 400) {
    function works() {
        scrollTo({top: 677, behavior:'smooth'})
    }
}else {
    function works() {
        scrollTo({top:1220, behavior: 'smooth'})
    }
}

if (window.innerWidth > 400) {
    function contacts() {
        scrollTo({top: 1025, behavior:'smooth'})
    }
}else {
    function contacts() {
        scrollTo({top:1845, behavior: 'smooth'})
    }
}

console.log(window.scrollY)