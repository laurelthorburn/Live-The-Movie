var movieTrailer = document.getElementById('movie-trailer');
var modal = document.querySelector('.modal');
var modalBg = document.querySelector('.modal-background');
var foodAPI = "&apiKey=44dd0e196e82490587267695e2fe196c";
var foodBaseURL = "https://api.spoonacular.com/recipes/complexSearch?query=";
var savedHoliday = JSON.parse(localStorage.getItem("savedHoliday"));
var displayFood = document.getElementById('food-container');

console.log(savedHoliday)

// movie script part
const apiMovieKey = 'api_key=d58ec33864c2c1ca7cfddcf6e0b283c8';
const baseUrl = 'https://api.themoviedb.org/3';
const searchUrl = "https://api.themoviedb.org/3/search/movie?"
const language = "&language=en-US&";
const apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&'+ apiMovieKey;
const posterUrl = 'https://image.tmdb.org/t/p/w500';
const searchURL = baseUrl + '/search/movie?'+ apiMovieKey;

  var userChoice = localStorage.getItem('savedHoliday');
  var finalUrl =   searchUrl + apiMovieKey + language + "&query=" + userChoice + "&page=1&include_adult=false"



//dictionary
var object = {
    valentines: "heart", 
    patrick: "irish",
    christmas: "christmas", 
    halloween: "halloween",
    birthday: "cake", 
    newYear: "champagne",
    thanksgiving: "thanksgiving",
    independence: "american"
}
//use this object to access your stuff
console.log (object[savedHoliday])

var finalFoodUrl = foodBaseURL + object[savedHoliday] + "&number=2" +  foodAPI;

//fetching spoonacular API
window.onload = function (){
    console.log(finalFoodUrl);

fetch(finalFoodUrl)
.then(function (response) {
return response.json();
})
.then(function (data) {
 //picture and title one
    var linkOne = document.createElement('a');
    var pictureOne = document.createElement('img');
    var titleOne = document.createElement('h3');

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

 console.log("https://spoonacular.com/recipes/" + data.results[1].title + "-" + data.results[1].id)
showMovie();
}
) 
}

$('#go-back').click(function(){
        window.location = "index.html";
});

// movie function display
function showMovie(){
  
    console.log(finalUrl);
    console.log(userChoice)
    fetch(finalUrl)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        console.log(data)

      $(".card").each(function (i) {
  
        var imgLink = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
        var description = data.results[i].overview;
        var title = data.results[i].original_title
        var rating = data.results[i].vote_average
        //  works for description fetch and display
        this.querySelector("#description").textContent = description;
        this.querySelector("#title").textContent = title;
        this.querySelector("#posterIMGcard").setAttribute("src", imgLink);
        this.querySelector("#rating").textContent = "Rating: " + rating;
        
        var trailer = "https://api.themoviedb.org/3/movie/"+ data.results[i].id + "/videos?api_key=d58ec33864c2c1ca7cfddcf6e0b283c8&language=en-US"
        fetch(trailer).then(res => res.json()).then(videoData => {
            if(videoData.results.length > 0){
              
              // var embed =  $('#testVideo');
              // var embed = [];
                videoData.results.forEach((video, idx) => {
                let {name, key, site} = video
                if(site == 'YouTube'){
                  $('#videoTag').attr("src", "https://www.youtube.com/embed/" + video.key);
                  console.log(video.key)
                  console.log(video.name)
                }
              })
          }
       })

    }
    ) 
    })}



// toggling modal
movieTrailer.addEventListener('click', () => {
    modal.classList.add('is-active');
    
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active')
    
})