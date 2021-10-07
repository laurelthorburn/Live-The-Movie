// TMBD api keys

const apiMovieKey = 'api_key=d58ec33864c2c1ca7cfddcf6e0b283c8';
const baseUrl = 'https://api.themoviedb.org/3';
const apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&'+ apiMovieKey;
const posterUrl = 'https://image.tmdb.org/t/p/w500';
const searchURL = baseUrl + '/search/movie?'+ apiMovieKey;


// Element that will show our search results
const mainMovie = document.getElementById('mainMovie');

// fetched genres from https://api.themoviedb.org/3/genre/movie/list?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8

  const valentinesDay = $('#valentines');
  const patrick = $('#patrick');
  const independence = $('#independence');
  const halloween = $('#halloween');
  const thanksgiving = $('#thanksgiving');
  const christmas = $('#christmas');
  const newYear = $('#newYear');
  const birthday = $('#birthday');


  $('#valentines').on('click', function(){
    // window.open("file:///C:/Users/derzo/HOMEWORK/Live-The-Movie/indexresults.html");
       // set up API fetch depending on holiday parameters
       var finalUrl = "https://api.themoviedb.org/3/search/movie?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8&language=en-US&query=Valentines&page=1&include_adult=false"
      //  change ID automatically would be great
    console.log("YAY you picked Valentine's");
       fetch(finalUrl)
       .then(function (response) {
         // console.log(response)
       return response.json();
       })
       .then(function (data) {
         console.log(data)
         }
   )
   changePage2();
   });

  $('#patrick').on('click', function(){
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

  $('#halloween').on('click', function(){
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

  $('#thanksgiving').on('click', function(){
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

  $('#christmas').on('click', function(){
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

  $('#newYear').on('click', function(){
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

  $('#independence').on('click', function(){
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
  $('#birthday').on('click', function(){
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

    function changePage2(){
      window.location = "indexresults.html"
    };


