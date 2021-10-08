var movieTrailer = document.getElementById('movie-trailer');
var modal = document.querySelector('.modal');
var modalBg = document.querySelector('.modal-background');

var foodAPI = "&apiKey=3d950f2860e74e5a949e59ac3b5f4126";
var foodBaseURL = "https://api.spoonacular.com/recipes/complexSearch?query=";

var savedHoliday = JSON.parse(localStorage.getItem("savedHoliday"));

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
console.log(finalFoodUrl);

fetch(finalFoodUrl)
.then(function (response) {
 // console.log(response)
return response.json();
})
.then(function (data) {
    // userHoliday = data;
    
    console.log(userHoliday);
    console.log(data);  
    document.getElementsByClassName('food-container').innerHTML = 'this is a test';

    //data.results[0].image
    //data.results[0].title
    //data.results[1].image
    //data.results[1].title

    //how do i pull recipe link? ID doesn't work



}
)


// toggling modal
movieTrailer.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active')
})
