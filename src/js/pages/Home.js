/**
 * Home page scripts.
 *
 * @module Home
 */

import { Resp } from '../modules/dev/_helpers';
import Parallax from 'parallax-js';

export default class Home {
  /**
   * Cache data, make preparations and initialize page scripts.
   */
  constructor() {
    this.message = do {
      const message = 'Home page scripts initialized on';

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

$(window).on('load', () => {
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
  $(window).on('scroll', function(e) {
    console.log('window scrolled');
    // $('.onScroll').show();
    // $("#page-2").show();
    // window.location.replace("#page-2");
  })

  //draw on canvas
  // var canvas = document.getElementById('canvas');
  // console.log(canvas);
  // var ctx = canvas.getContext('2d');
  // var raf;
  //
  // var ball = {
  //   x: 0,
  //   y: 0,
  //   radius: 1,
  //   grow: 'true',
  //   color: '#3d6bc7',
  //   draw: function() {
  //     ctx.beginPath();
  //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  //     ctx.closePath();
  //     ctx.fillStyle = this.color;
  //     ctx.fill();
  //   }
  // };
  //
  // function draw() {
  //   ctx.clearRect(0,0, canvas.width, canvas.height);
  //   ball.draw();
  //   if (ball.radius<=canvas.width && ball.grow) ball.radius = ball.radius*1.1;
  //   else {
  //     window.location.replace("#page-2");
  //     ball.grow = false;
  //     ball.x = 0;
  //     ball.y = canvas.height;
  //   }
  //   if (ball.radius>=0 && !ball.grow) ball.radius = ball.radius/1.1;
  //   raf = window.requestAnimationFrame(draw);
  // }




  // canvas.addEventListener('click', function(e) {
  //   // $('#canvas').show();
  //   ball.radius = 1;
  //   ball.x = canvas.width/2;
  //   ball.y = canvas.height*3/4;
  //   ball.grow = true;
  //   raf = window.requestAnimationFrame(draw);
  // });

  // canvas.addEventListener('mouseout', function(e) {
  //   $('#canvas').hide();
  //   window.cancelAnimationFrame(raf);
  // });

})
