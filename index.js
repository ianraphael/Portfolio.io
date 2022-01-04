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
        scrollTo({top: 641, behavior:'smooth'})
    }
}else {
    function about() {
        scrollTo({top:603, behavior: 'smooth'})
    }
}

if (window.innerWidth > 400) {
    function works() {
        scrollTo({top: 1293, behavior:'smooth'})
    }
}else {
    function works() {
        scrollTo({top:1231, behavior: 'smooth'})
    }
}

if (window.innerWidth > 400) {
    function contacts() {
        scrollTo({top: 1927, behavior:'smooth'})
    }
}else {
    function contacts() {
        scrollTo({top:1839, behavior: 'smooth'})
    }
}

console.log(window.scrollY)
