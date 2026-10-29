
const menuButton=document.querySelector('.menu-btn');
const nav=document.querySelector('.navlinks');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{if(nav)nav.classList.remove('open');}));
