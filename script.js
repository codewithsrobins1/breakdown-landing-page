let openBtn = document.querySelector("#open-icon");
let closeBtn = document.querySelector("#close-icon");
let navLinks = document.querySelector(".nav-links");
let navLink = document.querySelectorAll(".link");

//Open Menu on Click
openBtn.addEventListener('click' , () => {
    navLinks.classList.add('active')
});

//Close the Menu on Click
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active')
})

//Close the Menu After Click a Nav Link
for (var i = 0 ; i < navLink.length; i++) {   //loop through node list of nav links
    navLink[i].addEventListener('click', function removeActive(){  //when clicked, removed the active class to close menu
        navLinks.classList.remove('active')
    }) 
 }
