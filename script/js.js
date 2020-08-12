// $(document).scroll(() => {
//     if ($(window).scrollTop() > 200) {
//         $(".menu").addClass("nav-bar-scroll");
//     } else {
//         $(".nav-bar-scroll").removeClass(".nav-bar-scroll");
//     }
// });


// $(function () {
//     $(".header-block").slick({
//         dots: true,
//         slidesToShow: 1,
//         // autoplay: true,
//         speed: 1000,
//         // autoplaySpeed: 2000,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 350,
//                 settings: {
//                     slidesToShow: 1,
//                     arrows: false,
//                     dots: false,
//                 },
//             },
//         ],
//     });
// });

// $(document).ready(function () {
//     $(".menu-nav").on("click", "a", function (event) {
//         event.preventDefault();
//         let id = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({ scrollTop: top }, 1500);
//     });
// });


// (function (exports) {
//     function initMap() {
//         exports.map = new google.maps.Map(document.querySelector(".footer-map"), {
//             center: {
//                 lat: -34.397,
//                 lng: 150.644
//             },
//             zoom: 8
//         });
//     }
//     exports.initMap = initMap;
// })((this.window = this.window || {}));
// $(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 400) {
//             $(".btn_up").fadeIn();
//         } else {
//             $(".btn_up").fadeOut();
//         }
//     });
//     $(".btn_up").click(function () {
//         $("body,html").animate({ scrollTop: 0 }, 700);
//     });
// });

// $(function () {
//     $(".btn_up").click(function () {
//         $("body,html").animate({ scrollTop: 0 }, 700);
//     });
// });

$(function () {
    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // speed: 1000,
        // autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        // responsive: [
        //     {
        //         breakpoint: 350,
        //         settings: {
        //             slidesToShow: 1,
        //             arrows: true,
        //             dots: false,
        //         },
        //     },
        // ],
    });
});

$('.tab-btn__item').on('click', function () {
    let tabName = $(this).data('tab'),
        tab = $('.tab-items[data-tab="' + tabName + '"]');

    $('.tab-btn__item.tab-color').removeClass('tab-color');
    $(this).addClass('tab-color');

    $('.tab-items.active').removeClass('active');
    tab.addClass('active');
});

$('.menu-v').on('click', function () {

    $('.click').toggleClass('click-v');

})

$('.click-block2__item').on('click', function () {

    $('.click').toggleClass('click-v');

})

