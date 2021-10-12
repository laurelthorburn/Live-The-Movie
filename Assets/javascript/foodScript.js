
var userHoliday;
var userDiet;

var selectDiet = document.getElementById("diet-choice");

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

function saveUserChoice(holiday){
    localStorage.setItem("savedHoliday", holiday);
};

function saveUserDiet(diet){
    userDiet = selectDiet.value;
    localStorage.setItem("savedDiet", diet);
};


function changePage2(){
    window.location = "indexresults.html";
  };

