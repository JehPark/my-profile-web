'use strict'


// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarName = document.querySelector("#navbar__logo__name");
const activeScroll = document.querySelector(".navbar__menu__item.active");

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
        navbarName.classList.add('log--white');
        activeScroll.classList.add('scroll');
    }else{
        navbar.classList.remove('navbar--dark');
        navbarName.classList.remove('log--white');
        activeScroll.classList.remove('scroll');
    }
})

// Handle scrolling when tapping on the menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'})

})