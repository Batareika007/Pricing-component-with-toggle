const timeline = gsap.timeline();

timeline.from('html', {
        opacity: 0,
        duration: 2
    })
    .from('h1', {
        y: '-200%'
    })
    .from('.toggle__left', {
        opacity: 0,
        x: '-500%'
    })
    .from('.toggle__right', {
        opacity: 0,
        x: '500%'
    })
    .from('.toggle__trg', {
        opacity: 0
    })
    .from('.toggle__trg_ball', {
        opacity: 0,
        y: '-400%',
        ease: "elastic.out(1.2, 0.5)"
    })

    .from('#card2', {
        y: 1300,
        ease: "elastic.out(1, 2q)",
        duration: 1,
    })
    .from('#card1', {
        x: -700,
        ease: "elastic.out(1, 2q)",
        duration: 1,

    }, '-=1')
    .from('#card3', {
        x: 700,
        ease: "elastic.out(1, 2q)",
        duration: 1,
    }, '-=1')
    .from('.card__header', {
        // y: '-400%'
        opacity: 0,
        duration: 0.5
    })
    .from('.card__price', {
        // x: -700
        opacity: 0,
        duration: 0.5
    })
    .from('.card__list', {
        y: -100,
        opacity: 0,
        duration: 0.5
        // height: 0
    })
    .from('.card__submit', {
        // y: 700
        opacity: 0,
        duration: 0.5
    })
    .from('footer', {
        opacity: 0,
        ease: "elastic.out(1.2, 0.5)",
        scale: 3,
        duration: 1
    })

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