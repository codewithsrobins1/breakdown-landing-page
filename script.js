let openBtn = document.querySelector("#open-icon");
let closeBtn = document.querySelector("#close-icon");
let navLinks = document.querySelector(".nav-links");
let navLink = document.querySelector(".link");

//Open Menu on Click
openBtn.addEventListener('click' , () => {
    navLinks.classList.add('active')
});

//Close the Menu on Click
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active')
})

//Close the Menu After Click a Nav Link
navLink.addEventListener('click', () => {
    navLinks.classList.remove('active')
})