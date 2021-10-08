var movieTrailer = document.getElementById('movie-trailer');
var modal = document.querySelector('.modal');
var modalBg = document.querySelector('.modal-background');
var foodAPI = "&apiKey=3d950f2860e74e5a949e59ac3b5f4126";
var foodBaseURL = "https://api.spoonacular.com/recipes/complexSearch?query=";
var savedHoliday = JSON.parse(localStorage.getItem("savedHoliday"));
var displayFood = document.getElementById('food-container').innerHTML;

console.log(savedHoliday)

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
    console.log(data);  //works
    console.log(data.results[0].image); //works
    console.log(document.getElementsByClassName('food-container')); //works
    displayFood = '<img src="' + data.results[0].image + '"></img>'; //doesn't work
    //data.results[0].image
    //data.results[0].title
    //data.results[1].image
    //data.results[1].title

    //how do i pull recipe link? ID doesn't work
}
) 
}

$('#go-back').click(function(){
        window.location = "index.html";
});

// toggling modal
movieTrailer.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active')
})
