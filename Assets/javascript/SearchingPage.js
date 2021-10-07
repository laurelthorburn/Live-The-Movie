// TMBD api keys

const apiKey = 'api_key=d58ec33864c2c1ca7cfddcf6e0b283c8';
const baseUrl = 'https://api.themoviedb.org/3';
const apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&'+ apiKey;
const posterUrl = 'https://image.tmdb.org/t/p/w500';
const searchURL = baseUrl + '/search/movie?'+ apiKey;


// Element that will show our search results
const mainMovie = document.getElementById('mainMovie');

// fetched from https://api.themoviedb.org/3/genre/movie/list?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8



  const valentinesDay = $('#Valentines');
  const Patrick = $('#Patrick');
  const Independence = $('#Independence');
  const Halloween = $('#Halloween');
  const Thanksgiving = $('#Thanksgiving');0
  const Christmas = $('#Christmas');
  const NewYear = $('#NewYear');
  const Muertos = $('#Muertos');

function onLoad (){
  // displaying API fetched before using parameters from onClick event from last page
}