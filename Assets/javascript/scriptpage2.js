var movieTrailer = document.getElementById('movie-trailer');
var modal = document.querySelector('.modal');
var modalBg = document.querySelector('.modal-background');


movieTrailer.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active')
})
