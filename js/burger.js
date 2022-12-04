let menuBtn = document.querySelector('.menu-btn');
let headerLinks = document.querySelector('.header-links');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active-burger');
	headerLinks.classList.toggle('active-burger');
})  