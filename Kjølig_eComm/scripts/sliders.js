// sliders //
// You can set your sliders in sliders.js. Try Ctrl + P.
//? Remove this strings if you don't need sliders
import * as sliders from './sliders.js';
let s = sliders;
export const heroSlider = new Swiper('.fullscreen__slider', {
    pagination: {
        el: '.fullscreen__pag',
        clickable: true,
        bulletActiveClass: 'active',
    },
    grabCursor: true,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }
    /*
  
    navigation: {
      nextEl: ".nextNavButton", prevEl: ".prevNavButton",
      disabledClass: 'unactive',
    },
    pagination: {
      el: '.swiperPagination',
      clickable: true,
    },
  
    preloadImages: true,
    lazy: {
      loadOnTransitionStart: false,
      loadPrevnext: true,
    },
  
    autoplay:{
      delay: 3000,
      stopOnLastSlide: false,
    },
  
    Infinite scrolling.
      loop: false,
  
    Changes the slider settings based on the width of the screen.
      breakpoints: {
        when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
  
    Changes the height of the slider in runtime depending on the height of the slides.
      autoHeight: true,
      slidesPerView: 1,
  
    If there are no more than one slides, the slider stops working.
      watchOverflow: true,
      direction: 'horizontal' or 'vertical',
  
    Indent between slides.
      spaceBetween: 150,
  
    Enable parallax effect.
      parallax: true,
    For working add and set attributes on elements in slide:
      data-swiper-parallax="0" (xRight)
      data-swiper-parallax-duration="1000" (in ms)
  
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  
    Thumbs construction:
      const demosSwiper = new Swiper('.demos', {
        spaceBetween: 15,
        slidesPerView: 6,
        watchOverflow: true,
      });
  
      const mainSwiper = new Swiper('.main', {
        watchOverflow: true,
  
        thumbs: {
          swiper: demosSwiper,
          slideThumbActiveClass: 'active',
        },
      });
    */
});
export const firstSlider = new Swiper('#slider1', {
    loop: true,
    navigation: {
        nextEl: "#sliderNext1", prevEl: "#sliderPrev1",
        disabledClass: 'unactive',
    },
    spaceBetween: 20,
    watchSlidesVisibility: true,
    breakpoints: {
        768: {
            slidesPerView: 4.6,
        },
        426: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 1.3,
        },
    },
});
export const secondSlider = new Swiper('#slider2', {
    loop: true,
    navigation: {
        nextEl: "#sliderNext2", prevEl: "#sliderPrev2",
        disabledClass: 'unactive',
    },
    spaceBetween: 15,
    watchSlidesVisibility: true,
    breakpoints: {
        768: {
            slidesPerView: 7.9,
        },
        600: {
            slidesPerView: 5,
        },
        426: {
            slidesPerView: 3.3,
        },
        320: {
            slidesPerView: 1.3,
        },
    },
});
