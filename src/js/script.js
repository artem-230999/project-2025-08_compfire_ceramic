import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import JustValidate from 'just-validate';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/sass/style.scss";

// Burger
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
// Burger

// Swiper
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
// Swiper

// Tabs
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
// Tabs

// Form
try {
  const validator = new JustValidate('#form', {submitFormAutomatically: true});

  validator
  .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Пожалуйста введите ваше имя'
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимальная длина 2 символа'
      }
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Пожалуйста введите ваш email'
      },
      {
        rule: 'email',
        errorMessage: 'Пожалуйста введите ваш email правильно'
      }
    ])
    .addField('#question', [
      {
        rule: 'required',
        errorMessage: 'Пожалуйста введите ваше сообщение'
      },
      {
        rule: 'minLength',
        value: 5,
        errorMessage: 'Минимальная длина 5 символов'
      }
    ])
    .addField('#checkbox', [
      {
        rule: 'required',
      }
    ], {
      errorsContainer: document.querySelector('#checkbox')
      .parentElement.parentElement.querySelector('.checkbox-error-message')
    });
} catch (e) {}
// Form

// Form2
try {
    const validatorForm = new JustValidate('#form2');

  validatorForm
  .addField('#email2', [
      {
        rule: 'required',
        errorMessage: 'Пожалуйста введите ваш email'
      },
      {
        rule: 'email',
        errorMessage: 'Пожалуйста введите ваш email правильно'
      }
    ], {
      errorsContainer: document.querySelector('#email2')
      .parentElement.querySelector('.error-message')
    })
    .addField('#checkbox2', [
      {
        rule: 'required',
      }
    ], {
      errorsContainer: document.querySelector('#checkbox')
      .parentElement.querySelector('.checkbox-error-message')
    });
} catch (e) {}
// Form2