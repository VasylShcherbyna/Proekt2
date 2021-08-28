import { refs } from './refs.js';

window.addEventListener('scroll', onScroll);
refs.buttonScrollUp.addEventListener('click', onButtonScrollUp);

function onScroll() {
  const scrolled = window.pageYOffset;
  const clientHeight = document.documentElement.clientHeight;

  if (scrolled > clientHeight) {
    refs.buttonScrollUp.classList.add('buttonScrollUp--show');
  }
  if (scrolled < clientHeight) {
    refs.buttonScrollUp.classList.remove('buttonScrollUp--show');
  }
}

function onButtonScrollUp() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(onButtonScrollUp, 0);
  }
}
