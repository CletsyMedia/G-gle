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

// slides
let slideIndex1 = 0;
 showSlides1();

 function showSlides1() {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   slideIndex1++;
   if (slideIndex1 > slides.length) {slideIndex1 = 1}    
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex1-1].style.display = "block";  
   dots[slideIndex1-1].className += " active";
   setTimeout(showSlides1, 3000); // Change image every 2 seconds
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


// Multiple Slide

let slideIndex2 = [1,1];
let slideId = ["mySlide1", "mySlide2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex2[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex2[no] = 1}    
  if (n < 1) {slideIndex2[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex2[no]-1].style.display = "";  
};


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
		}                                                    
		else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
















