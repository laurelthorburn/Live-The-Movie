var APIFood = "3d950f2860e74e5a949e59ac3b5f4126"; //Matt
var APIMovie = "d58ec33864c2c1ca7cfddcf6e0b283c8"; //Valerii

var movieTrailer = document.getElementById('movie-trailer');
var modal = document.querySelector('.modal');
var modalBg = document.querySelector('.modal-background');


movieTrailer.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active')
})
