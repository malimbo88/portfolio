// JQuery
var $ = require( "jquery" );

// Scroll Glitch
$(function() {

  // Last Scroll Position
  var lastScrollPosition = $(document).scrollTop();

  // Elements to animate
  var glitchMain= $("#animation.main_icon");
  var glitchTop = $("#animation.glitch_top");
  var glitchBottom = $("#animation.glitch_bottom");

  // On Scroll
  $(window).on('scroll', function() {

      // Capture where the top of the page is after scroll
      var currentPosition = $(document).scrollTop();

      // Animation -------------------------------------------------------------
      // ScrollDown !!!
      if( (lastScrollPosition - currentPosition) < 0 && !(glitchTop.hasClass("scroll_down")) && !(glitchBottom.hasClass("scroll_down")) ) {
        // Start animation
        glitchMain.addClass("scroll_down");
        glitchTop.addClass("scroll_down");
        glitchBottom.addClass("scroll_down");

        // Remove class after animation is end
        setTimeout(function(){

          // -> Scroll Down
          glitchMain.removeClass("scroll_down");
          glitchTop.removeClass("scroll_down");
          glitchBottom.removeClass("scroll_down");
        }, 500);
      }


      // ScrollUp !!!
      else if( (lastScrollPosition - currentPosition) > 0 && !(glitchTop.hasClass("scroll_up")) && !(glitchBottom.hasClass("scroll_up")) ) {
        // Start animation
        glitchMain.addClass("scroll_up");
        glitchTop.addClass("scroll_up");
        glitchBottom.addClass("scroll_up");

        // Remove class after animation is end
        setTimeout(function(){

          // -> Scroll Up
          glitchMain.removeClass("scroll_up");
          glitchTop.removeClass("scroll_up");
          glitchBottom.removeClass("scroll_up");
        }, 500);
      }

      // Update lastScrollPosition value with currentPosition value
      lastScrollPosition = currentPosition;
  });
  // end On Scroll

});
// end Scroll Glitch
