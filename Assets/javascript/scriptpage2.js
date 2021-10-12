var movieTrailerOne = document.getElementById('movie-trailer-one');
var movieTrailerTwo = document.getElementById('movie-trailer-two');
var movieTrailerThree = document.getElementById('movie-trailer-three');
var movieTrailerFour = document.getElementById('movie-trailer-four');

var modal = document.querySelector('.modal');
var modalBg = document.querySelector('.modal-background');

var foodAPI = "&apiKey=d0f4f19f4b444b67846287c205775f1c";
var foodBaseURL = "https://api.spoonacular.com/recipes/complexSearch?query=";
var savedHoliday = localStorage.getItem("savedHoliday");
var displayFood = document.getElementById('food-container');


// movie script part
const apiMovieKey = 'api_key=d58ec33864c2c1ca7cfddcf6e0b283c8';
const baseUrl = 'https://api.themoviedb.org/3';
const searchUrl = "https://api.themoviedb.org/3/search/movie?"
const language = "&language=en-US&";
const apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&'+ apiMovieKey;
const posterUrl = 'https://image.tmdb.org/t/p/w500';


var userChoice = localStorage.getItem('savedHoliday');
  
//dictionary
var objectFood = {
    valentines: "heart", 
    patrick: "irish",
    christmas: "christmas", 
    halloween: "halloween",
    birthday: "cake", 
    newYear: "cocktail",
    thanksgiving: "thanksgiving",
    independence: "american"
}

// an object to define the search query for movies
var objectMovie = {
    valentines: "valentines", 
    patrick: "st-patrick",
    christmas: "christmas", 
    halloween: "halloween",
    birthday: "birthday", 
    newYear: "new-year-s-eve",
    thanksgiving: "thanksgiving",
    independence: "independence"
}


//use this object to access your stuff

var finalFoodUrl = foodBaseURL + objectFood[savedHoliday] + "&number=3" +  foodAPI;

// console.log(finalFoodUrl);

//fetching spoonacular API
window.onload = function (){

    // console.log(savedHoliday)
fetch(finalFoodUrl)
.then(function (response) {
return response.json();
})
.then(function (data) {
 //picture and title one
    var linkOne = document.createElement('a');
    var pictureOne = document.createElement('img');
    var titleOne = document.createElement('h3');
    // console.log(data)
    // console.log(finalFoodUrl)
    linkOne.setAttribute("href","https://spoonacular.com/recipes/" + data.results[0].title + "-" + data.results[0].id);
    linkOne.setAttribute('target', '_blank');
    pictureOne.setAttribute("src", data.results[0].image);
    titleOne.innerText = data.results[0].title;

    linkOne.append(titleOne);
    linkOne.append(pictureOne);
    displayFood.append(linkOne); 

 //picture and title two
 var linkTwo = document.createElement('a');
 var pictureTwo = document.createElement('img');
 var titleTwo = document.createElement('h3');

 linkTwo.setAttribute("href","https://spoonacular.com/recipes/" + data.results[1].title + "-" + data.results[1].id);
 linkTwo.setAttribute('target', '_blank');
 pictureTwo.setAttribute("src", data.results[1].image);
 titleTwo.innerText = data.results[1].title;

 linkTwo.append(titleTwo);
 linkTwo.append(pictureTwo);
 displayFood.append(linkTwo); 

  //picture and title three
  var linkThree = document.createElement('a');
  var pictureThree = document.createElement('img');
  var titleThree = document.createElement('h3');
 
  linkThree.setAttribute("href","https://spoonacular.com/recipes/" + data.results[2].title + "-" + data.results[2].id);
  linkThree.setAttribute('target', '_blank');
  pictureThree.setAttribute("src", data.results[2].image);
  titleThree.innerText = data.results[2].title;
 
  linkThree.append(titleThree);
  linkThree.append(pictureThree);
  displayFood.append(linkThree); 
 
showMovie();
}
) 
}

$('#go-back').click(function(){
        window.location = "index.html";
});

// movie function display

var finalUrl =   searchUrl + apiMovieKey + language + "&query=" + objectMovie[savedHoliday]  + "&page=1&include_adult=false"

var noTrailer = document.createElement("p");


function showMovie(){
    fetch(finalUrl)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
      $(".card").each(function (i) {
        // if poster is missing - select next movie
        if (data.results[i].poster_path == null){
          i = i + 2;
        }
        var imgLink = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
        var description = data.results[i].overview;
        var title = data.results[i].original_title
        var rating = data.results[i].vote_average
        //  works for description fetch and display
        this.querySelector("#description").textContent = description;
        this.querySelector("#title").textContent = title;
        this.querySelector("#posterIMGcard").setAttribute("src", imgLink);
        this.querySelector("#rating").textContent = "Rating: " + rating ;

    }
    ) 
    })}

    // fetching info for displaying trailers in the modal

    function showTrailer(i){
      fetch(finalUrl)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
      // if no trailer - add a picture that says "no trailer found"
      var trailer = "https://api.themoviedb.org/3/movie/"+ data.results[i].id + "/videos?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8&language=en-US"
      fetch(trailer).then(res => res.json()).then(videoData => {
        if(videoData.results.length > 0){
            videoData.results.forEach((video, idx) => {
            let {name, key, site} = video
            if(site == 'YouTube'){
              $('#videoTag').attr("src", "https://www.youtube.com/embed/" + video.key);
              // console.log(video.key)
              // console.log(video.name)
            }
          })
      }

      else {
        $(".modal-content").append(noTrailer)
        var message = "No video found!";
        noTrailer.append(message)
        noTrailer.color = 'yellow';
      }

   })
    })
    }

//changing background of page two depending on holiday selected
console.log(userChoice);

if (userChoice === "valentines"){
  $('body').addClass("valentinebg");
} else if (userChoice === "patrick"){
  $('body').addClass("irishbg"); 
} else if (userChoice === "independence"){
  $('body').addClass("independencebg");
} else if (userChoice === "halloween"){
  $('body').addClass("halloweenbg");
} else if (userChoice === "thanksgiving"){
  $('body').addClass("thanksgivingbg");
} else if (userChoice === "birthday"){
  $('body').addClass("bdaybg");
} else if (userChoice === "christmas"){
  $('body').addClass("christmasbg");
} else if (userChoice === "newYear"){
  $('body').addClass("newYears"); 
} 



// toggling modal
movieTrailerOne.addEventListener('click', () => {
    modal.classList.add('is-active');
    let i = 0;
    showTrailer(i);
});
movieTrailerTwo.addEventListener('click', () => {
    modal.classList.add('is-active');
    let i = 1;
    showTrailer(i); 
});
movieTrailerThree.addEventListener('click', () => {
    modal.classList.add('is-active');
    let i = 2;
    showTrailer(i); 
});
movieTrailerFour.addEventListener('click', () => {
    modal.classList.add('is-active');
    let i = 3;
    showTrailer(i); 
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active')
    noTrailer.innerHTML = "";
})