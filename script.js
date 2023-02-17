const body = document.querySelector('body');
const navbarToggle = document.querySelector('.header-toggle');
const navbarLinks = document.querySelector('.menu');
const navbarItems = document.querySelectorAll('.header-item');

navbarItems.forEach((element) => {
	element.addEventListener('click', () => {
		navbarLinks.classList.toggle('menu-active');

		body.style.overflow = 'auto';
	});
});

navbarToggle.addEventListener('click', () => {
	navbarLinks.classList.toggle('menu-active');

	body.style.overflow = 'hidden';
});
