const toggleNav = document.getElementById('toggle-nav');
const navList = document.getElementById('nav-list');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const body = document.querySelector('body');
const cover = document.getElementById('cover');

function toggleMenu() {
    toggleNav.querySelectorAll('img').forEach((img) => img.classList.toggle('hidden'));
    nav.classList.toggle('!translate-x-0');
    // header.classList.toggle('bg-[#00000077]');
    // header.classList.toggle('bg-white');
    cover.classList.toggle('hidden');
    // body.classList.toggle('!bg-[#00000077]');
}

navList.addEventListener('click', (e) => {
    e.stopPropagation();
});

toggleNav.addEventListener('click', () => {
    toggleMenu();
});

nav.addEventListener('click', () => {
    toggleMenu();
});

// nav.addEventListener('touchstart', () => {
//     document.body.style.overflow = 'hidden';
// });

// nav.addEventListener('touchend', () => {
//     document.body.style.overflow = 'auto';
// });

// nav.addEventListener('mouseenter', () => {
//     document.body.style.overflow = 'hidden';
// });

// nav.addEventListener('mouseleave', () => {
//     document.body.style.overflow = 'auto';
// });
