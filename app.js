const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");
const clos = document.querySelector(".close");
menu.onclick = () =>{
    menu.style.display = "none";
    navbar.style.top = "10%";
    clos.style.display = "block";
}
clos.onclick = () =>{
    menu.style.display = "block";
    navbar.style.top = "-100%";
    clos.style.display = "none";
}
window.onscroll = () =>{
    menu.style.display = "block";
    navbar.style.top = "-100%";
    clos.style.display = "none";
}

