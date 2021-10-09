var movieTrailer = document.getElementById('movie-trailer');
var modal = document.querySelector('.modal');
var modalBg = document.querySelector('.modal-background');
var foodAPI = "&apiKey=3d950f2860e74e5a949e59ac3b5f4126";
var foodBaseURL = "https://api.spoonacular.com/recipes/complexSearch?query=";
var savedHoliday = JSON.parse(localStorage.getItem("savedHoliday"));
var displayFood = document.getElementById('food-container');

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
