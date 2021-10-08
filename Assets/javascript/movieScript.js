// TMBD api keys

const apiKey = 'api_key=d58ec33864c2c1ca7cfddcf6e0b283c8';
const baseUrl = 'https://api.themoviedb.org/3';
const apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&'+ apiKey;
const posterUrl = 'https://image.tmdb.org/t/p/w500';
const searchURL = baseUrl + '/search/movie?'+ apiKey;


// Element that will show our search results
const mainMovie = document.getElementById('mainMovie');

// fetched genres from https://api.themoviedb.org/3/genre/movie/list?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8

  const valentinesDay = $('#valentines');
  const patrick = $('#patrick');
  const independence = $('#independence');
  const halloween = $('#halloween');
  const thanksgiving = $('#thanksgiving');0
  const christmas = $('#christmas');
  const newYear = $('#newYear');
  const birthday = $('#birthday');

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
          })
        
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
       window.open("indexresults.html");
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

    $('#test').on('click', function(){
      // set up API fetch depending on holiday parameters
      var finalUrl = "https://api.themoviedb.org/3/search/movie?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8&language=en-US&query=2020&page=1&include_adult=false"
      ;
      //  change ID automatically would be great
       fetch(finalUrl)
         .then(function (response) {
          // console.log(response)
       return response.json();
         })
         .then(function (data) {
           console.log(data)
           var i = 1;
           var imgLink = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
           
           var description = data.results[i].overview;
           var title = data.results[i].original_title
           
           var rating = data.results[i].vote_average
           //  works for description fetch and display
           $('#description').text(description);
          //  works for title fetch and display
           $('#title').text(title);
          //  doesnt work
           $('#posterIMGcard').attr("src", imgLink)
           $('#rating').text("Rating: " + rating);
         
         })
     });

    

     $('#movie-trailer').on('click', function(){
      var trailer = "https://api.themoviedb.org/3/movie/716788/videos?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8&language=en-US"
      fetch(trailer).then(res => res.json()).then(videoData => {
          if(videoData.results.length > 0){
            var embed = [];
            var dots = [];
            videoData.results.forEach((video, idx) => {
              let {name, key, site} = video
    
              if(site == 'YouTube'){
                  
                $('#videoTag').attr("src", "https://www.youtube.com/embed/" + video.key);
                console.log(video.key)
                console.log(video.name)
                
              //   embed.push(`
              //     <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" class="embed hide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
              // `)
    
              //   dots.push(`
              //     <span class="dot">${idx + 1}</span>
              //   `)

              //   console.log(video.site)

              
              
              }
            })
        }
     })});



  $('#test').on('click', function(){
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
         var imgLink = "https://image.tmdb.org/t/p/w500" + data.results[4].backdrop_path;
         var i = 1;
         var description = data.results[i].overview;
         var title = data.results[i].original_title
         var posterImg = '<span class="card-title" style="width:100%; background: rgba(0, 0, 0, 0.5);">' + imgLink + '</span>'
         var rating = data.results[i].vote_average
         //  works for description fetch and display
         $('#description').text(description);
        //  works for title fetch and display
         $('#title').text(title);
        //  doesnt work
        //  $('#posterIMG').text(posterIMG);
         $('#rating').text("Rating: " + rating);
        //  cant get it to create the element
         console.log(posterImg);
       })
   });