gsap.from('#card1', {
    x: -700,
    ease: "elastic.out(1, 2q)",
    duration: 2,
    delay: 0.1,
});
gsap.from('#card3', {
    x: 700,
    ease: "elastic.out(1, 2)",
    duration: 2,
    delay: 0.1,

});
gsap.from('#card2', {
    y: 1300,
    duration: 1,

});

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