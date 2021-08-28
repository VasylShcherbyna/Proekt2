import { localStorageAPI } from './localStorageAPI';
import { refs } from './refs';
import { render } from './renderGallery';
import { spinnerMethod } from './spinner';
import { newToastr } from './toastrOptions';

export async function renderMovieList(key, page) {
  if (page === 1) {
    refs.galleryList.innerHTML = '';
  }

  refs.movieGallerySection.dataset.page = key;
  const data = localStorageAPI.getDataPerPage(key, page);
  if (!data || data.length === 0) {
    spinnerMethod.removeSpinner();
    if (document.querySelector('.js-notification-wrapper') === null && page === 1) {
      refs.movieGallerySection.firstElementChild.insertAdjacentHTML(
        'afterbegin',
        '<div class="js-notification-wrapper"><svg class="notification-cat-icon" width="280" height="280"><use href="./sprite.svg#icon-notificationCat"></use></svg></div>',
      );
    }
    return;
  }
  try {
    render(data);
  } catch (e) {
    spinnerMethod.removeSpinner();
  }
}
