
var userHoliday;

$('#valentines').on('click', function(){

    userHoliday = $('#valentines').attr('id');

    saveUserChoice(userHoliday);
    changePage2();

});
$('#patrick').on('click', function(){

    userHoliday = $('#patrick').attr('id');
    saveUserChoice(userHoliday);
    changePage2();

});

$('#independence').on('click', function(){
    userHoliday = $('#independence').attr('id');
    saveUserChoice(userHoliday);
    changePage2();

});

$('#halloween').on('click', function(){
    userHoliday = $('#halloween').attr('id');
    saveUserChoice(userHoliday);
    changePage2();

});

$('#thanksgiving').on('click', function(){
    userHoliday = $('#thanksgiving').attr('id');
    saveUserChoice(userHoliday);
    changePage2();

});

$('#birthday').on('click', function(){
    userHoliday = $('#birthday').attr('id');
    saveUserChoice(userHoliday);
    changePage2();

});

$('#christmas').on('click', function(){
    userHoliday = $('#christmas').attr('id');
    saveUserChoice(userHoliday);
    changePage2();

});

$('#newYear').on('click', function(){
    userHoliday = $('#newYear').attr('id');
    saveUserChoice(userHoliday);
    changePage2();

});

function saveUserChoice(holiday){

    localStorage.setItem("savedHoliday", JSON.stringify(holiday));

}


function changePage2(){
    window.location = "indexresults.html";
  };
