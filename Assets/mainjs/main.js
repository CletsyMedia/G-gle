/*=============== CHANGE BACKGROUND HEADER ===============*/
// Simple

const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    header.classList.toggle('scroll-bg-header', window.scrollY > 0)
  })

// Mobile menu
let nav = document.querySelector('.nav_menu');
let navToggle = document.querySelector('.nav_toggle');
let navClose =document.querySelector('.nav_close');

navToggle.addEventListener('click', () => {
  nav.classList.add('flick')
});
navClose.addEventListener('click', () => {
  nav.classList.remove('flick')
});


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link');
const linkAction = () =>{
  const nav = document.querySelector('.nav_menu')
  nav.classList.remove('flick')
}
navLink.forEach(l => l.addEventListener('click', linkAction))


// Scroll Active Link
window.onscroll = function(){
  let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav_link');

section.forEach(sec => {
  let top = window.scrollY;
  let offset = sec.offsetTop - 150;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id');

  if(top >= offset && top < offset + height){
    navLinks.forEach(links => {
      links.classList.remove('active-Link');
      document.querySelector('.nav_link[href*='+ id +']').classList.add
      ('active-Link');
    });
  };
});

 };

/*========Stats=======*/
const counters = document.querySelectorAll('.counter');
const speed = 200;
counters.forEach(counter => {
    const updateCount = () =>{
        const target = counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed; 
        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
          } else{
            counter.innerText = target;
          }
    }
    updateCount();
})

// contact
let formLog = document.querySelector('#contForm');
let contactForm = document.querySelector('.contact');
let FormClose = document.querySelector('.closeForm');

formLog.addEventListener('click', () =>{
  contactForm.classList.add('active')
})
FormClose.addEventListener('click', () =>{
  contactForm.classList.remove('active')
});












