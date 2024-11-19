burger = document.querySelector('.burger')
navcon = document.querySelector('.nav-con')
navbar = document.querySelector('.navbar')
logo = document.querySelector('.logo')

burger.addEventListener('click',()=>{
    logo.classList.toggle('nav-resp')
    navbar.classList.toggle('nav-resp')
    navcon.classList.toggle('nav-h')
    
})