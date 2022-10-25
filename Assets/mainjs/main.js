/*=============== CHANGE BACKGROUND HEADER ===============*/
// Simple

const header = document.querySelector('header');
    window.onscroll = () =>{
    header.classList.toggle('scroll-bg-header', window.scrollY > 0)
}

// Mobile menu
let nav = document.querySelector('.nav_list');
let navToggle = document.querySelector('.nav_toggle');
let navClose =document.querySelector('.nav_close');

navToggle.addEventListener('click', () => {
  nav.classList.add('flick')
});
navClose.addEventListener('click', () => {
  nav.classList.remove('flick')
});


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



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);














