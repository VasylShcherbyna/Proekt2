import movieCardTemplate from '../templates/movieCardTemplate.hbs';
import fetchAPI from './fetchAPI.js';
import { refs } from './refs';
import { newToastr } from './toastrOptions.js';
import { spinnerMethod } from './spinner';
import { getGenres } from './filterByGenre';

// const fetch = new Fetch();

document.addEventListener('DOMContentLoaded', () => {
  renderTrending(1);
});

async function renderTrending(page) {
  refs.movieGallerySection.dataset.page = 'trending';
  try {
    if (page === 1) {
      refs.galleryList.innerHTML = '';
    }
    const trends = await fetchAPI.searchByTrending(undefined, page).then(data => {
      return data.results;
    });
    if (page > trends.total_pages) {
      spinnerMethod.removeSpinner();
      return;
    }
    render(trends);
  } catch (e) {
    console.log('this is error:', e);
  }
}
async function renderSearchResult(query, page) {
  refs.movieGallerySection.dataset.page = 'searching';
  try {
    if (page === 1) {
      refs.galleryList.innerHTML = '';
    }
    const data = await fetchAPI.searchByInputQuery(query, page);

    const results = data.results;
    if (results.length === 0 && page === 1) {
      newToastr.error('Unsuccessful results. Try different query!');
      setTimeout(() => {
        refs.searchInput.value = '';
        const event = new Event('input');
        refs.searchInput.dispatchEvent(event);
      }, 2000)

    }

    if (page > data.total_pages) {
      spinnerMethod.removeSpinner();
      return;
    }

    render(results);
  } catch (e) {
    newToastr.error('Unsuccessful results. Try again!');
  }
}

async function renderByGenreFilter(genre, page) {
  try {
    if (page === 1) {
      refs.galleryList.innerHTML = '';
    }
    const array = await getGenres();
    const genreId = array.genres.find(el => el.name === genre).id;
    const results = await fetchAPI.sortByGenre(genreId, page);

    if (page > results.total_pages) {
      spinnerMethod.removeSpinner();
      return;
    }
    render(results.results);
  } catch (e) {
    console.log('this is error:', e);
  }
}

async function render(data) {
  const genres = await fetchAPI.getGenres().then(list => {
    return list.genres;
  });
  const result = await renderGalleryMarkup(data, genres);
  const cardsGallery = movieCardTemplate(result);
  refs.galleryList.insertAdjacentHTML('beforeend', cardsGallery);
}

function renderGalleryMarkup(data, list) {
  if (Object.keys(data[0]).includes('genres')) {
    let newData = data.map(item => {
      const id = item.genres.map(item => item.id);
      Object.assign(item, { genre_ids: id });
      delete item.genres;
      return item;
    });
    return newData.map(obj => ({
      ...obj,

      genres_short_list: createGenres(obj, list),
      release_date: createCardYear(obj),
    }));
  }
  return data.map(obj => ({
    ...obj,

    genres_short_list: createGenres(obj, list),
    release_date: createCardYear(obj),
  }));
}

function createGenres(obj, list) {
  const movieCardGenresList = obj.genre_ids;
  const movieCardGenresArray = list.filter(item => movieCardGenresList.includes(item.id));
  const mapedGenres = movieCardGenresArray.map(({ name }) => name);

  let movieGenreArraySlice = [];
  if (mapedGenres.length < 3) {
    movieGenreArraySlice = mapedGenres;
  } else {
    movieGenreArraySlice = mapedGenres.slice(0, 2);
    if (fetchAPI.language === 'en-US') { movieGenreArraySlice.push('Other'); }
    else { movieGenreArraySlice.push('другие'); }

  }

  return movieGenreArraySlice.join(', ');
}

function createCardYear(obj) {
  return obj.release_date ? obj.release_date.slice(0, 4) : '';
}
export { renderTrending, renderSearchResult, render, renderByGenreFilter };
