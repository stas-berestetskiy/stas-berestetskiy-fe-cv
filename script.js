const navbarToggle = document.querySelector('.header-toggle');
const navbarLinks = document.querySelector('.menu');
const navbarItems = document.querySelectorAll('.header-item');

navbarItems.forEach((element) => {
	element.addEventListener('click', () => {
		navbarLinks.classList.toggle('menu-active');
	});
});

navbarToggle.addEventListener('click', () => {
	navbarLinks.classList.toggle('menu-active');
});
