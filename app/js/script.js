
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

$('.story__autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
  dotsClass: 'achievements__slider-dots',
  mobileFirst: true,
});

// $(function() {
//   $('.header__menu-link').on('click', function () {
//     $('.header__menu-list').removeClass('.header__menu-list--close');
//   });
// });

let menuBtn = document.querySelector('.header__menu-link');
let menu = document.querySelector('.header__menu-list');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

let menuBtnWt = document.querySelector('.header__menu-link--dark');
let menuWt = document.querySelector('.header__menu-list--white');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
});