'use strict'


// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarName = document.querySelector("#navbar__logo__name");
const activeScroll = document.querySelectorAll(".navbar__menu__item");

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
        navbarName.classList.add('log--white');
        activeScroll.forEach((item) =>{
            item.classList.add('scroll');
        })
    }else{
        navbar.classList.remove('navbar--dark');
        navbarName.classList.remove('log--white');
        activeScroll.forEach((item) =>{
            item.classList.remove('scroll');
        })
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
    scrollIntoView(link);
})

// Handle click on "contact me" button on home

const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click', (event)=>{
    const link = event.target.dataset.link;
    scrollIntoView(link);
})

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = `${1 - window.scrollY / homeHeight}`;
})

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if (window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
})


// Handle click on the arrow up
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#home');
})

//Projects

const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null){
        return;
    }

    //Remove selection from previous one and select new one

    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');
    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
        projects.forEach((project) => {
            if (filter === '*' || project.dataset.type === filter){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anim-out');
    }, 300);
})

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'})
}

