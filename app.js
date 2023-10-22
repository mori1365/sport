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

var acc =document.getElementsByClassName("accordion");
var i;
for(i=0;i<acc.length;i++) {
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
 
}
    