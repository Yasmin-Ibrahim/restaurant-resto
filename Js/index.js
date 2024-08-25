let menuBars = document.getElementById('menu-bars');
let search = document.getElementById('search-icon');
let showForm = document.getElementById('search-form');
let closeForm = document.getElementById('close');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header .navbar a')

menuBars.addEventListener('click', function(){
    menuBars.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    menuBars.classList.remove('fa-xmark');
    navbar.classList.remove('active');

    section.forEach((sec) => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if((top >= offset) && (top < (offset + height))){
            navLinks.forEach((link) => {
                link.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
}

search.addEventListener("click", function(){
    showForm.classList.toggle('active');
})

closeForm.addEventListener("click", function(){
    showForm.classList.remove('active');
})

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    });

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView:3,
        },
    },
});

function loader(){
    document.querySelector('.loader').classList.add('fade-out')
}

function fadeOut(){
    setInterval(loader, 3000)
}

window.onload = fadeOut;