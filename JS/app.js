$('.solar_system-img-slider').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll:1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    asNavFor: '.solar_system-text-slider',
});
$('.solar_system-text-slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    asNavFor: '.solar_system-img-slider',
});

$('.fun').jarallax();