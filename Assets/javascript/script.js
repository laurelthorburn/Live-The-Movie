// creating button hover effects on main page
var body = document.body;
var christmasBtn = document.getElementById('christmas');
var fireworkBtn = document.getElementById('independence');
var heartBtn = document.getElementById('valentines');
var newYearBtn = document.getElementById('newYear');
var birthdayBtn = document.getElementById('birthday');
var irishBtn = document.getElementById('patrick');
var halloweenBtn = document.getElementById('halloween');
var thanksgivingBtn = document.getElementById('thanksgiving');

//valentine's day
heartBtn.onmouseover = function() {
	body.className = 'valentinebg';
}

heartBtn.onmouseout = function() {
	body.className = '';
}

//independence day
fireworkBtn.onmouseover = function() {
	body.className = 'independencebg';
}

fireworkBtn.onmouseout = function() {
	body.className = '';
}

//birthday
birthdayBtn.onmouseover = function() {
	body.className = 'bdaybg';
}

birthdayBtn.onmouseout = function() {
	body.className = '';
}

//christmas
christmasBtn.onmouseover = function() {
	body.className = 'christmasbg';
}

christmasBtn.onmouseout = function() {
	body.className = '';
}

//New Year's
newYearBtn.onmouseover = function() {
	body.className = 'newYears';
}

newYearBtn.onmouseout = function() {
	body.className = '';
}

//St Patrick's Day
irishBtn.onmouseover = function() {
	body.className = 'irishbg';
}

irishBtn.onmouseout = function() {
	body.className = '';
}

//Halloween
halloweenBtn.onmouseover = function() {
	body.className = 'halloweenbg';
}

halloweenBtn.onmouseout = function() {
	body.className = '';
}

//Thanksgiving
thanksgivingBtn.onmouseover = function() {
	body.className = 'thanksgivingbg';
}

thanksgivingBtn.onmouseout = function() {
	body.className = '';
}

