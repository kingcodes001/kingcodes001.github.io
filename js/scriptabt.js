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