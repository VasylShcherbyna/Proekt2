import fetchAPI from './fetchAPI.js';
import renameAll from './renameAll.js';
import { renderTrending } from './renderGallery.js';
import { refs } from './refs.js';
import { controlPageHome } from './headerMenu.js';
import { generateOptions } from './filterByGenre.js';
const language = {
  en: 'en-US',
  ru: 'ru-RU',
};
const checkboxLanguageRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');

checkboxLanguageRef.addEventListener('click', changeLanguage);
(function initLanguage() {
  if (localStorage.getItem('language') === null) {
    fetchAPI.language = language.en;
    localStorage.setItem('language', fetchAPI.language);
  } else {
    fetchAPI.language = localStorage.getItem('language');
  }
  checkboxLanguageRef.checked = fetchAPI.language === language.en ? false : true;
  bodyRef.classList.add(fetchAPI.language);

  renameAll(fetchAPI.language);
  generateOptions(fetchAPI.language);
  renderTrending();
  controlPageHome();
})();

function changeLanguage() {
  let oldLanguage = localStorage.getItem('language');

  if (fetchAPI.language === language.en) {
    fetchAPI.language = language.ru;
    localStorage.setItem('language', fetchAPI.language);
    bodyRef.classList.replace(oldLanguage, fetchAPI.language);
    checkboxLanguageRef.checked = true;
  } else {
    fetchAPI.language = language.en;
    localStorage.setItem('language', fetchAPI.language);
    bodyRef.classList.replace(oldLanguage, fetchAPI.language);
    checkboxLanguageRef.checked = false;
  }
  renameAll(fetchAPI.language);
  if (document.querySelector('.js-notification-wrapper')) {
    document.querySelector('.js-notification-wrapper').remove();
  }
  generateOptions(fetchAPI.language);
  renderTrending();
  controlPageHome();
}
