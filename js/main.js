let menu = document.querySelector(".menu-button")
let navbar = document.querySelector(".nav_links li")


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("nav_links li")
}


window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("wrapper")
}