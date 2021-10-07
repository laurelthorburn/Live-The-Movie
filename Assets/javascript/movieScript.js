// TMBD api keys

const apiKey = 'api_key=d58ec33864c2c1ca7cfddcf6e0b283c8';
const baseUrl = 'https://api.themoviedb.org/3';
const apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&'+ apiKey;
const posterUrl = 'https://image.tmdb.org/t/p/w500';
const searchURL = baseUrl + '/search/movie?'+ apiKey;


// Element that will show our search results
const mainMovie = document.getElementById('mainMovie');

// fetched from https://api.themoviedb.org/3/genre/movie/list?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8

const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

//   valent - romance 10749
// patrick - comedy,  romance 35 10749
// independance - history, war, western 36 10752 37
// halloween - horrow, thriller, animation, fantasy, science fiction 27 53 16 14 878
// thanksgiving - comedy, animation, drama, 35 16 18
// birthday - fantasy, music, comedy, drama, romance 14 10402 35 18 10749
// chistmas - fantasy, music, comedy, drama, romance 14 10402 35 18 10749
// newyear - fantasy, music, comedy, drama, romance 14 10402 35 18 10749


  const valentinesDay = $('#Valentines');
  const Patrick = $('#Patrick');
  const Independence = $('#Independence');
  const Halloween = $('#Halloween');
  const Thanksgiving = $('#Thanksgiving');0
  const Christmas = $('#Christmas');
  const NewYear = $('#NewYear');
  const Muertos = $('#Muertos');

  // valentinesDay.addEventListener("click", openPage());

  // function openPage() {
    
  // }

  $('#Valentines').on('click', function(){
    // window.open("file:///C:/Users/derzo/HOMEWORK/Live-The-Movie/indexresults.html");
       // set up API fetch depending on holiday parameters
       var finalUrl = "https://api.themoviedb.org/3/search/movie?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8&language=en-US&query=Valentines&page=1&include_adult=false"
      //  change ID automatically would be great

       fetch(finalUrl)
       .then(function (response) {
         // console.log(response)
       return response.json();
       })
       .then(function (data) {
         console.log(data)
         }
   )
   });

  $('#Patrick').on('click', function(){
    // window.open("file:///C:/Users/derzo/HOMEWORK/Live-The-Movie/indexresults.html");
       // set up API fetch depending on holiday parameters
       var finalUrl = "https://api.themoviedb.org/3/search/movie?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8&language=en-US&query=Patrick&page=1&include_adult=false"
       //  change ID automatically would be great
 
        fetch(finalUrl)
        .then(function (response) {
          // console.log(response)
        return response.json();
        })
        .then(function (data) {
          console.log(data)
          }
    )
    });

  $('#Halloween').on('click', function(){
    // window.open("file:///C:/Users/derzo/HOMEWORK/Live-The-Movie/indexresults.html");
       // set up API fetch depending on holiday parameters
       var finalUrl = "https://api.themoviedb.org/3/search/movie?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8&language=en-US&query=Halloween&page=1&include_adult=false"
       //  change ID automatically would be great
 
        fetch(finalUrl)
        .then(function (response) {
          // console.log(response)
        return response.json();
        })
        .then(function (data) {
          console.log(data)
          }
    )
    });

  $('#Thanksgiving').on('click', function(){
    // window.open("file:///C:/Users/derzo/HOMEWORK/Live-The-Movie/indexresults.html");
       // set up API fetch depending on holiday parameters
       var finalUrl = "https://api.themoviedb.org/3/search/movie?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8&language=en-US&query=Thanksgiving&page=1&include_adult=false"
       //  change ID automatically would be great
 
        fetch(finalUrl)
        .then(function (response) {
          // console.log(response)
        return response.json();
        })
        .then(function (data) {
          console.log(data)
          }
    )
    });

  $('#Christmas').on('click', function(){
    // window.open("file:///C:/Users/derzo/HOMEWORK/Live-The-Movie/indexresults.html");
       // set up API fetch depending on holiday parameters
       var finalUrl = "https://api.themoviedb.org/3/search/movie?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8&language=en-US&query=Christmas&page=1&include_adult=false"
       //  change ID automatically would be great
 
        fetch(finalUrl)
        .then(function (response) {
          // console.log(response)
        return response.json();
        })
        .then(function (data) {
          console.log(data)
          }
    )
    });

  $('#NewYear').on('click', function(){
    // window.open("file:///C:/Users/derzo/HOMEWORK/Live-The-Movie/indexresults.html");
       // set up API fetch depending on holiday parameters
       var finalUrl = "https://api.themoviedb.org/3/search/movie?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8&language=en-US&query=NewYearEve&page=1&include_adult=false"
       //  change ID automatically would be great
 
        fetch(finalUrl)
        .then(function (response) {
          // console.log(response)
        return response.json();
        })
        .then(function (data) {
          console.log(data)
          }
    )
    });

  $('#Independence').on('click', function(){
    // window.open("file:///C:/Users/derzo/HOMEWORK/Live-The-Movie/indexresults.html");
       // set up API fetch depending on holiday parameters
       var finalUrl = "https://api.themoviedb.org/3/search/movie?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8&language=en-US&query=IndependenceDay&page=1&include_adult=false"
       //  change ID automatically would be great
 
        fetch(finalUrl)
        .then(function (response) {
          // console.log(response)
        return response.json();
        })
        .then(function (data) {
          console.log(data)
          }
    )
    });
  $('#Muertos').on('click', function(){
    // window.open("file:///C:/Users/derzo/HOMEWORK/Live-The-Movie/indexresults.html");
       // set up API fetch depending on holiday parameters
       var finalUrl = "https://api.themoviedb.org/3/search/movie?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8&language=en-US&query=birthday&page=1&include_adult=false"
       //  change ID automatically would be great
 
        fetch(finalUrl)
        .then(function (response) {
          // console.log(response)
        return response.json();
        })
        .then(function (data) {
          console.log(data)
          }
    )
    });
