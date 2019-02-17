const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');
const menuDesktop = document.querySelector('.menu-desktop');

const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menuMobile.classList.add('show');
		navItems.forEach((item) => item.classList.add('show'));
		// Set Menu State
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menuMobile.classList.remove('show');
		navItems.forEach((item) => item.classList.remove('show'));

		// Set Menu State
		showMenu = false;
	}
}
