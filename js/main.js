"use strict";


let windowScroll = window.scrollY;
let navbar = document.querySelector('.navbar');
let logo = document.querySelector('#logo');
let navLinks = document.querySelectorAll('.navLink');


// windowScroll > 0
function navbarStylesWhenScroll() {
    navbar.style.cssText = 'background-color: white; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05)';
    logo.src = './images/bakery-logo (dark).png';
    navLinks.forEach((link) => {
        link.style.cssText = 'color: black';
        link.addEventListener('mouseenter', () => {
            link.style.cssText = 'color: #8E7754';
        });
        link.addEventListener('mouseleave', () => {
            link.style.cssText = 'color: black';
        });
    });
};

// windowScroll = 0
function navbarStylesWhenZero() {
    navbar.style.cssText = 'background-color: transparent; box-shadow: none';
    logo.src = './images/bakery-logo (light).png';
    navLinks.forEach((link) => {
        link.style.cssText = 'color: white';
        link.addEventListener('mouseenter', () => {
            link.style.cssText = 'color: #8E7754';
        });
        link.addEventListener('mouseleave', () => {
            link.style.cssText = 'color: white';
        });
    });
};


if (windowScroll > 0)
    navbarStylesWhenScroll();
else
    navbarStylesWhenZero();


window.addEventListener('scroll', () => {
    let currentWindowScroll = window.scrollY;

    if (currentWindowScroll > 0)
        navbarStylesWhenScroll();
    else
        navbarStylesWhenZero();
});
