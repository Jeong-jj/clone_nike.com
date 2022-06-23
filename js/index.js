$('.slide2-group').slick({
    autoplay:true,
    autoplayspeed:500,
    speed:300,
    dots:true,
    // arrows: false, 화살표를 없애고 싶을 때
    prevArrow: '<button class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button>',
    pauseOnHover: false,
    // fade: true,
    slidesToShow: 3,
    slidesToScroll:3,
})