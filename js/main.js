document.querySelector('.burger-btn').addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('open');
})

const swiper = new Swiper('.products__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 18,
    slidesOffsetBefore: 0,


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 18,
            slidesOffsetBefore: 0,
        },

        768: {
            slidesPerView: 2.7,
            spaceBetween: 18,
            slidesOffsetBefore: 32,
        },

        375: {
            slidesPerView: 1,
            spaceBetween: 18,
            slidesOffsetBefore: 0,
        },
    }
});

const swiperrReviews = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
        },

        768: {
            slidesPerView: 2,
        },

        375: {
            slidesPerView: 1,
        },
    }
});

document.querySelectorAll('.btn--buy').forEach(function (button) {
    button.addEventListener('click', function () {
        document.querySelector('.popup--buy').classList.toggle('open');
    });
});

document.querySelector('.popup__btn--buy').addEventListener('click', function () {
    document.querySelector('.popup--buy').classList.remove('open');
});

document.querySelector('.btn--reviews').addEventListener('click', function () {
    document.querySelector('.popup--reviews').classList.toggle('open');
})

document.querySelector('.popup__btn--reviews').addEventListener('click', function () {
    document.querySelector('.popup--reviews').classList.remove('open');
});

document.querySelector('.btn--subscribe').addEventListener('click', function () {
    document.querySelector('.popup--subscribe').classList.toggle('open');
})

document.querySelector('.popup__btn--subscribe').addEventListener('click', function () {
    document.querySelector('.popup--subscribe').classList.remove('open');
});

document.getElementById('btn--products').addEventListener('click', function() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('btn--recipe').addEventListener('click', function() {
    document.getElementById('recipe').scrollIntoView({
        behavior: 'smooth'
    });
});