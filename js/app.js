// DOM elements
let openBtn = document.querySelector('.open-btn');
let closebtn = document.querySelector('.close-btn');
let nav = document.querySelectorAll('.nav');

// Event listner
openBtn.addEventListener('click', () => {
   nav.forEach(navElement => navElement.classList.add('visible'));
});

closebtn.addEventListener('click', () => {
   nav.forEach(navElement => navElement.classList.remove('visible'));
});