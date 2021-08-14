const topBarMobileEl = document.querySelector('#top-bar-mobile');
let isMenuOpen = false;


document.querySelector('#mobile-menu-btn').addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    topBarMobileEl.style.visibility = isMenuOpen ? 'visible' : 'hidden';
    topBarMobileEl.style.left = isMenuOpen ? '0' : '-100%';  
});