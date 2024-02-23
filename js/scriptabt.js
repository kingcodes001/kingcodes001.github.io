let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = ()=> {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id =  sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
               document.querySelector('header nav a [href* = '+ id +']').classList.add('active');
            });
            
        };
    });
};



ScrollReveal({
     reset: true,
     distance : '50px',
     duration: 2000,
     delay: 400
    });



    //scrollrevial in about us section
    ScrollReveal().reveal('.king-about-head', { delay: 200 , origin: 'left' });
    ScrollReveal().reveal('.king-about-content', { delay: 300 , origin: 'right' });
    ScrollReveal().reveal('.king-image img', { delay: 400 , origin: 'left' });
    ScrollReveal().reveal('.readMore-btn', { delay: 800 , origin: 'bottom' });
    
    // //scrollrevial in project section
    ScrollReveal().reveal('.king-projects h1', { delay: 500 , origin: 'left' });
    ScrollReveal().reveal('.king-projects-container', { delay: 550 , origin: 'top', interval: 100 });
    
    //scrollrevial in service section
    ScrollReveal().reveal('.service-head', { delay: 500 , origin: 'left' });
    ScrollReveal().reveal('.service-box', { delay: 550 , origin: 'bottom', interval: 100 });
    
    // //scrollrevial in contact me section
    ScrollReveal().reveal('.king-contact-intro h1 , .king-contact-intro p', { delay: 500 , origin: 'left' });
    ScrollReveal().reveal('.king-form', { delay: 500 , origin: 'right' });
    ScrollReveal().reveal('.king-contact-info', { delay: 560 , origin: 'top', interval: 200 });

    











const readmore_btn = document.querySelector(".readMore-btn");
const readmore_text = document.querySelector(".read-more-text");
var abtcontent = document.querySelector(".king-about-content");

readmore_btn.style.background = "rgb(0,255,0)";
readmore_btn.style.color = "white";

readmore_btn.addEventListener('click', (e) => 
{
        readmore_text.classList.toggle('read-more-text') ;

    if(readmore_btn.innerText === 'Read More'){
        readmore_btn.innerHTML = 'Read Less';
        readmore_btn.style.background = "red";
    }
    else{
        readmore_btn.innerText = 'Read More';
        readmore_btn.style.background = "cyan";
    }
});
