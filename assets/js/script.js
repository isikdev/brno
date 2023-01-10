$('.plyaers__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
        {
            breakpoint: 1096,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
$('.open').on("click", function () {
    $('.navbar__mobile').toggleClass('navbar__mobile-active');
});