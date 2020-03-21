// AOS.init({
//     once: true,
// });
// window.addEventListener('load', AOS.refresh);


$(document).ready(function () {
    //btn to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    //-------------------------------

    //slider-garage
    let sliderGarage = new Swiper('.swiper-slider-garage', {
        // Optional parameters
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next-garage',
            prevEl: '.swiper-button-prev-garage',
        },
    });

    //slider-prom
    let sliderProm = new Swiper('.swiper-slider-prom', {
        // Optional parameters
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next-prom',
            prevEl: '.swiper-button-prev-prom',
        },
    });

    //slider-otkat
    let sliderOtkat = new Swiper('.swiper-slider-otkat', {
        // Optional parameters
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next-otkat',
            prevEl: '.swiper-button-prev-otkat',
        },
    });

    //slider-rasp
    let sliderRasp = new Swiper('.swiper-slider-rasp', {
        // Optional parameters
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next-rasp',
            prevEl: '.swiper-button-prev-rasp',
        },
    });

    //slider-simple
    let sliderSimple= new Swiper('.swiper-slider-simple', {
        // Optional parameters
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next-simple',
            prevEl: '.swiper-button-prev-simple',
        },
    });

    //slider-speed
    let sliderSpeed = new Swiper('.swiper-slider-speed', {
        // Optional parameters
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next-speed',
            prevEl: '.swiper-button-prev-speed',
        },
    });

    //slider-automatic
    let sliderAutomatic = new Swiper('.swiper-slider-automatic', {
        // Optional parameters
        loop: false,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next-automatic',
            prevEl: '.swiper-button-prev-automatic',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1170: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });

    //slider-accessories
    let sliderAccessories= new Swiper('.swiper-slider-accessories', {
        // Optional parameters
        loop: false,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next-accessories',
            prevEl: '.swiper-button-prev-accessories',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1170: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });

    //slider-main
    let sliderMain = new Swiper('.swiper-slider-main', {
        // Optional parameters
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next-main',
            prevEl: '.swiper-button-prev-main',
        },
        pagination: {
            el: '.swiper-pagination-main',
            dynamicBullets: false,
        },
    });

    let swiperReview = new Swiper('.review-slider', {
        loop: false,
        pagination: {
            el: '.review-slider__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.review-button-next',
            prevEl: '.review-button-prev',
        },
    });

});
