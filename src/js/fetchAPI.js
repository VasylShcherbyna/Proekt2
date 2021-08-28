import { newToastr } from './toastrOptions.js';

export default {
  API_KEY: '05b27f765345223aac972c2dbb5eec37',
  language: 'en-US',

  async searchByTrending(timePeriod = `week`, page = 1) {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/${timePeriod}?api_key=${this.API_KEY}&language=${this.language}&page=${page}`,
    );
    if (response.ok) {
      const data = await response.json();

      return await data;
    }
    newToastr.error('Unsuccessful results. Try again!');
    throw new Error(await response.text());
  },
  async searchByInputQuery(query, page = 1) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=${this.language}&page=${page}&include_adult=false&query=${query}`,
    );

    if (response.ok) {
      return await response.json();
    }
    newToastr.error('Unsuccessful results. Try again!');
    throw new Error(await response.text());
  },

  async searchByMovieId(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=${this.language}`,
    );

    if (response.ok) {
      return await response.json();
    }
    newToastr.error('Unsuccessful results. Try again!');
    throw new Error(await response.text());
  },

  async getGenres() {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.API_KEY}&language=${this.language}`,
    );

    if (response.ok) {
      return await response.json();
    }
    newToastr.error('Unsuccessful results. Try again!');
    throw new Error(await response.text());
  },

  async sortByGenre(genre, page = 1) {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&with_genres=${genre}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&language=${this.language}`,
    );

    if (response.ok) {
      return await response.json();
    }
    newToastr.error('Unsuccessful results. Try again!');
    throw new Error(await response.text());
  },

  async getTrailers(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.API_KEY}&language=${this.language}`,
    );

    if (response.ok) {
      return await response.json();
    }
    newToastr.error('Unsuccessful results. Try again!');
    throw new Error(await response.text());
  },
}
