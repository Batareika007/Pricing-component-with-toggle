const toggle = document.getElementById('toggle');
const toggleBall = document.querySelector('.toggle__trg_ball');
const priceLow = document.querySelectorAll('.card__price_small');
const priceHigh = document.querySelectorAll('.card__price_big');
const price = document.querySelectorAll('.card__price');

toggle.addEventListener('click', function () {
    toggleBall.classList.toggle('active');
    priceLow.forEach(i => {
        i.classList.toggle('active');
    })
    priceHigh.forEach(i => {
        i.classList.toggle('active');
    })

})