let menu= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Hacking Enthusiat', 'Web Developer', 'Programmer', 'Tech Enthusiast', ],
    typeSpeed: 50,
    backSpeed: 50,
    DelayNode: 1000,
    loop: true,
  });