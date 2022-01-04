let navIcon = document.getElementById("navIcon");
let navBar = document.getElementById("navBar");
let myPicture = document.getElementById("myPicture"); 
let header = document.getElementsByClassName("main-header");
let currentWidth = window.innerWidth;

alert("Kindly reload the page after switching width for testing the responsiveness. \nThank you!")


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

// window.addEventListener("scroll", () => {
//     const scrolled = window.scrollY;
//     console.log(scrolled)
// })

function home() {
    scrollTo({top:0, behavior: 'smooth'})
}
if (window.innerWidth > 400) {
    function about() {
        scrollTo({top: 641, behavior:'smooth'})
    }
}else {
    function about() {
        scrollTo({top:608, behavior: 'smooth'})
    }
}

if (window.innerWidth > 400) {
    function works() {
        scrollTo({top: 1290, behavior:'smooth'})
    }
}else {
    function works() {
        scrollTo({top:1223, behavior: 'smooth'})
    }
}

if (window.innerWidth > 400) {
    function contacts() {
        scrollTo({top: 1935, behavior:'smooth'})
    }
}else {
    function contacts() {
        scrollTo({top:1839, behavior: 'smooth'})
    }
}
