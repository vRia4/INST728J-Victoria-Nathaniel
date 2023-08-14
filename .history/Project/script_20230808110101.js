function toggleDropdown(overview) {
    overview.parentElement.classList.toggle('expanded');
}

// Taken from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

} 