
$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
  dotsClass: 'achievements__slider-dots',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings:{
          slidesToShow: 4,
          slidesToScroll: 4,
        }
    },
  ]
});

$('.autoplay--story').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
  dotsClass: 'achievements__slider-dots',
  mobileFirst: true,
  // responsive: [
  //   {
  //     breakpoint: 767,
  //     settings:{
  //         slidesToShow: 1,
  //         slidesToScroll: 4,
  //       }
  //   },
  // ]
});