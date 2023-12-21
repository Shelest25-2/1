$('.myslider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,

    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
    ]
})
