/**
 * About page scripts.
 *
 * @module About
 */

 import { Resp } from '../modules/dev/_helpers';

 export default class About {
   /**
    * Cache data, make preparations and initialize page scripts.
    */
   constructor() {
     this.message = do {
       const message = 'About page scripts initialized on';

       if (Resp.isDesk) {
         `${message} Desktop`;
       } else if (Resp.isTablet) {
         `${message} Tablet`;
       } else if (Resp.isMobile) {
         `${message} Mobile`;
       }
     };

     // initialize after construction
     this.init();
   }

   /**
    * Example method.
    */
   example() {
     console.log(this.message);
   };

   /**
    * Initialize Home page scripts.
    */
   init() {
     this.example();
   }
 }

// init and show active slide;
function showActiveSlide() {
  let activeSlide = $('.slider__pagination__button.is-active');
  let offsetX = activeSlide.offset().left + activeSlide.width()/2 - 17;
  // console.log(offsetX);
  $('.slider__pagination__underline').css('transform','translateX(calc( ' + offsetX + 'px))');
  let dataAtr = activeSlide.data('filter');
  $('#page-2 .layers').each((index, value) => {
    $(value).hide();
    if ($(value).data('country') == dataAtr) {$(value).show()};
  });
}

 $(window).on('load', () => {
   showActiveSlide();
   $('.slider__pagination__button').on('click', function () {
      $('.slider__pagination__button').removeClass('is-active');
     $(this).addClass('is-active');
     showActiveSlide();
   })
 })
