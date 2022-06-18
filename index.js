const sideMenu = document.querySelector('.menu');
const menuBtn = document.querySelector('nav-sidebar');
const closeBtn = document.querySelector('#close');
menuBtn.addEventListener('click' , () => {
    sideMenu.style.display ='block';
})
closeBtn.addEventListener('click' , () => {
    sideMenu.style.display ='none';
})