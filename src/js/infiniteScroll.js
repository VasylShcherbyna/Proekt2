import { renderMovieList } from './renderFromLocalStorage';
import fetchAPI from './fetchAPI.js';
import { refs } from './refs';
import { renderSearchResult, renderTrending, renderByGenreFilter } from './renderGallery.js';
import { spinnerMethod } from './spinner';
const debounce = require('lodash.debounce');

// const fetch = new FetchAPI();
let page = 1;
let previousPage = refs.movieGallerySection.dataset.page;

const observer = new IntersectionObserver(debounce(onRender, 1000), { threshold: 0 });
observer.observe(refs.anchor);
async function onRender(entries) {
  let resultList;
  const query = refs.searchInput.value;
  if (entries[0].isIntersecting) {
    spinnerMethod.addSpinner();
    if (refs.galleryList.children.length !== 0) {
      if (previousPage !== refs.movieGallerySection.dataset.page) {
        page = 1;
      }
      page += 1;
      switch (refs.movieGallerySection.dataset.page) {
        case 'trending':
          renderTrending(page);
          previousPage = refs.movieGallerySection.dataset.page;
          break;
        case 'searching':
          renderSearchResult(query, page);
          previousPage = refs.movieGallerySection.dataset.page;
          break;
        case 'watched':
          renderMovieList(refs.movieGallerySection.dataset.page, page);
          previousPage = refs.movieGallerySection.dataset.page;
          break;
        case 'queue':
          renderMovieList(refs.movieGallerySection.dataset.page, page);
          previousPage = refs.movieGallerySection.dataset.page;
          break;
        case 'filtering':
          renderByGenreFilter(document.querySelector('.js-select').value, page)
          previousPage = refs.movieGallerySection.dataset.page;
          break;

        default:
          break;
      }
      spinnerMethod.removeSpinner();
    } else {
      spinnerMethod.removeSpinner();
      return;
    }
  }
}

//     if (page > resultList.total_pages) {
//       spinnerMethod.removeSpinner();
//       return;
//     } else {
//       render(resultList.results);
//       spinnerMethod.removeSpinner();
//     }
//   } else {
//     return;
//   }
// }

// async function render(data) {
//   spinnerMethod.addSpinner();
//   try {
//     const genres = await fetch.getGenres().then(list => {
//       return list.genres;
//     });
//     const result = await renderGalleryMarkup(data, genres);
//     refs.galleryList.insertAdjacentHTML('beforeend', movieCardTemplate(result));
//     const img = document.querySelectorAll('.js-card-img');
//     if (refs.galleryList.lastElementChild.complete) {
//       spinnerMethod.removeSpinner();
//     }
//   } catch (e) {
//     spinnerMethod.removeSpinner();
//   }
// }
