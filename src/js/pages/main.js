/**
 * Home page scripts.
 *
 * @module main
 */

import { Resp } from '../modules/dev/_helpers';
import Parallax from 'parallax-js';
import 'fullpage.js';

export default class main {
  /**
   * Cache data, make preparations and initialize page scripts.
   */
  constructor() {
    this.message = do {
      const message = 'main page scripts initialized on';

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
   * Initialize Home page scripts.
   */
  init() {
    $(window).on('load', () => {
      //Burger menu
      $('.header__burger').on('click', function () {
        $('.header__burger').toggleClass('is-active');
        // console.log($(this).hasClass('is-active'));
        if ($(this).hasClass('is-active')) {
          $('.header .block--right').addClass('is-active');
          $('.header .block--popup').addClass('is-active');
        }
          else {
            $('.header .block--right').removeClass('is-active');
            $('.header .block--popup').removeClass('is-active');
          }
      })
      // creates a new Parallax.js instance from elements with class="scene"
      $('.scene').each( (index, value) => {
        // console.log(value);
        var parallaxInstance = new Parallax (value, {
          relativeInput: true
        });
      });
      //scroll effect
      $('#fullpage').fullpage({
        scrollingSpeed: 500,
        afterLoad: function(anchorLink, index) {
		      var loadedSection = $(this);
  		    //using index
		      if (index == 2) {
			      console.log("Section 2 ended loading");
            // $.fn.fullpage.destroy();
		      }
			  }
      });
      //Initialize active slide on page2
      function showActiveSlide() {
        let activeSlide = $('.slider__pagination__button.is-active');
        let offsetX = activeSlide.offset().left + activeSlide.width()/2 - 17;
        // console.log(offsetX);
        $('.slider__pagination__underline').css('transform','translateX(calc( ' + offsetX + 'px))');
        let dataAtr = activeSlide.data('filter');
        $('#page2 .layers').each((index, value) => {
          $(value).hide();
          if ($(value).data('country') == dataAtr) {$(value).show()};
        });
      }
      //show active slide
      showActiveSlide();
      //active slide pagination
      $('.slider__pagination__button').on('click', function () {
         $('.slider__pagination__button').removeClass('is-active');
        $(this).addClass('is-active');
        showActiveSlide();
      })
    })
  }
}
