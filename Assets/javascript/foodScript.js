
var userHoliday;
var userDiet;

var selectDiet = document.getElementById("diet-choice");

//creating holiday button that changes index page and stores both user holiday and diet to local storage (see functions at bottom of this page)

$('#valentines').on('click', function(){
    userHoliday = $('#valentines').attr('id');
    var userDiet = selectDiet.options[selectDiet.selectedIndex].value;
    saveUserDiet(userDiet);
    saveUserChoice(userHoliday);
    changePage2();

});
$('#patrick').on('click', function(){
    userHoliday = $('#patrick').attr('id');
    var userDiet = selectDiet.options[selectDiet.selectedIndex].value;
    saveUserDiet(userDiet);
    saveUserChoice(userHoliday);
    changePage2();

});

$('#independence').on('click', function(){
    userHoliday = $('#independence').attr('id');
    var userDiet = selectDiet.options[selectDiet.selectedIndex].value;
    saveUserDiet(userDiet);
    saveUserChoice(userHoliday);
    changePage2();

});

$('#halloween').on('click', function(){
    userHoliday = $('#halloween').attr('id');
    var userDiet = selectDiet.options[selectDiet.selectedIndex].value;
    saveUserDiet(userDiet);
    saveUserChoice(userHoliday);
    changePage2();

});

$('#thanksgiving').on('click', function(){
    userHoliday = $('#thanksgiving').attr('id');
    var userDiet = selectDiet.options[selectDiet.selectedIndex].value;
    saveUserDiet(userDiet);
    saveUserChoice(userHoliday);
    changePage2();

});

$('#birthday').on('click', function(){
    userHoliday = $('#birthday').attr('id');
    var userDiet = selectDiet.options[selectDiet.selectedIndex].value;
    saveUserDiet(userDiet);
    saveUserChoice(userHoliday);
    changePage2();

});

$('#christmas').on('click', function(){
    userHoliday = $('#christmas').attr('id');
    var userDiet = selectDiet.options[selectDiet.selectedIndex].value;
    saveUserDiet(userDiet);
    saveUserChoice(userHoliday);
    changePage2();

});

$('#newYear').on('click', function(){
    userHoliday = $('#newYear').attr('id');
    var userDiet = selectDiet.options[selectDiet.selectedIndex].value;
    saveUserDiet(userDiet);

    saveUserChoice(userHoliday);
    changePage2();

});

//saving user selected holiday to local storage
function saveUserChoice(holiday){
    localStorage.setItem("savedHoliday", holiday);
};

//storing user dietary restrictions to local storage
function saveUserDiet(diet){
    userDiet = selectDiet.value;
    localStorage.setItem("savedDiet", diet);
};

//creating go back button
function changePage2(){
    window.location = "indexresults.html";
  };

