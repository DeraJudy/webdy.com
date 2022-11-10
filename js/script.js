// Sidebar open close js Code
let menuOpenBtn = document.querySelector(".navbar .bars");
let closeOpenBtn = document.querySelector(".navbarlinks .close");
let navLinks = document.querySelector(".navbarlinks");

menuOpenBtn.addEventListener("click", ()=>{
	navLinks.style.right = "0";
});
closeOpenBtn.addEventListener("click", ()=>{
	navLinks.style.right = "-100%";
});