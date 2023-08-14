function toggleDropdown(overview) {
    overview.parentElement.classList.toggle('expanded');
}

// Taken from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("Slides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
} 


let slideIndex2 = 2;
showSlide(slideIndex2);

function plus(n) {
showSlide(slideIndex2 += n);
}

function current(n) {
showSlide(slideIndex2 = n);
}

function showSlide(n) {
let i;
let slidess = document.getElementsByClassName("Slides2");
let dots = document.getElementsByClassName("cl");
if (n > slidess.length) {slideIndex2 = 1}    
if (n < 1) {slideIndex2 = slidess.length}
for (i = 0; i < slidess.length; i++) {
slidess[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slidess[slideIndex2-1].style.display = "block";  
dots[slideIndex2-1].className += " active";
}