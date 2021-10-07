var foodAPI = "&apiKey=3d950f2860e74e5a949e59ac3b5f4126";
var foodBaseURL = "https://api.spoonacular.com/recipes/complexSearch?query=";


$('#valentines').on('click', function(){
    var finalFoodUrl = foodBaseURL + "heart" + "&number=2" +  foodAPI;
    console.log(finalFoodUrl);
    
    fetch(finalFoodUrl)
    .then(function (response) {
     // console.log(response)
    return response.json();
    })
    .then(function (data) {
        console.log(data) 
    }
)
});
$('#patrick').on('click', function(){
    var finalFoodUrl = foodBaseURL + "irish" + "&number=2" +  foodAPI;
    console.log(finalFoodUrl);
    
    fetch(finalFoodUrl)
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
    var finalFoodUrl = foodBaseURL + "america" + "&number=2" +  foodAPI;
    console.log(finalFoodUrl);
    
    fetch(finalFoodUrl)
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
    var finalFoodUrl = foodBaseURL + "halloween" + "&number=2" +  foodAPI;
    console.log(finalFoodUrl);
    
    fetch(finalFoodUrl)
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
    var finalFoodUrl = foodBaseURL + "thanksgiving" + "&number=2" +  foodAPI;
    console.log(finalFoodUrl);
    
    fetch(finalFoodUrl)
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
    var finalFoodUrl = foodBaseURL + "cake" + "&number=2" +  foodAPI;
    console.log(finalFoodUrl);
    
    fetch(finalFoodUrl)
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
    var finalFoodUrl = foodBaseURL + "christmas" + "&number=2" +  foodAPI;
    console.log(finalFoodUrl);
    
    fetch(finalFoodUrl)
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
    var finalFoodUrl = foodBaseURL + "champagne" + "&number=2" +  foodAPI;
    console.log(finalFoodUrl);
    
    fetch(finalFoodUrl)
    .then(function (response) {
     // console.log(response)
    return response.json();
    })
    .then(function (data) {
        console.log(data) 
    }
)
});

