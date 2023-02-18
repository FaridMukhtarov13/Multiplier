document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    perPage: 10,
    focus: "center",
    autoplay: true,
    interval: 1000,
    flickMaxPages: 3,
    updateOnMove: true,
    pagination: false,
    padding: "10%",
    throttle: 300,
    breakpoints: {
      1440: {
        perPage: 1,
        padding: "30%",
      },
    },
  }).mount();
});

// new Splide( '.carousel' ).mount( window.splide.Extensions );

// import { Splide } from '@splidejs/splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// new Splide( '.carousel' ).mount( { AutoScroll } );

// import Splide from '@splidejs/splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// const splide = new Splide( '.carousel', {
//   type   : 'loop',
//   drag   : 'free',
//   focus  : 'center',
//   perPage: 3,
//   autoScroll: {
//     speed: 1,
//   },
// } );

// splide.mount();
