import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/sass/style.scss";

const burger = document.querySelector('.burger');
const close = document.querySelector('.header__menu-close');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  menu.classList.add('header__menu--active');
  document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
  menu.classList.remove('header__menu--active');
  document.body.style.overflow = '';
});


try {
	new Swiper(".works__slider", {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".icon-right-open",
			prevEl: ".icon-left-open",
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
				spaceBetween: 5,
			},
			1920: {
				spaceBetween: 35,
				slidesPerView: 3,
			},
		},
		modules: [Navigation, Pagination],
	});
} catch (e) {}


try {
	const tabs = document.querySelectorAll(".catalog__btn");
	const contents = document.querySelectorAll(".catalog__content-item");

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			// Удаляем активный класс у всех табов и контента
			tabs.forEach((t) => t.classList.remove("catalog__btn_active"));
			contents.forEach((c) => (c.style.display = "none"));

			// Добавляем активный класс к нажатому табу и показываем соответствующий контент
			tab.classList.add("catalog__btn_active");
			contents[index].style.display = "flex";
		});
	});

	// Показываем первый контент при загрузке
	contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) {}