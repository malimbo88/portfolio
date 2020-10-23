// JQuery
var $ = require( "jquery" );

// Scroll Glitch
$(function() {

  // Last Scroll Position
  var lastScrollPosition = $(document).scrollTop();

  // Elements to animate
  var glitchTop = $(".crop_icon.glitch_top");
  var glitchBottom = $(".crop_icon.glitch_bottom");

  // Animation time
  var scrollAnimationDuration = 500;

  // Frames
  var glitchTopBottomInitialPosition = -8;
  var glitchTopScrollDownPosition = 12;
  var glitchBottomScrollDownPosition = 2;
  var glitchTopScrollUpPosition = -28;
  var glitchBottomScrollUpPosition = -18;
  var glitchInitialOpacity = 0;
  var glitchScrollOpacity = 0.5;

  // GlitchTop state condition
  var glitchTopState = parseInt(glitchTop.css("bottom"), 10);

  // GlitchBottom state condition
  var glitchBottomState = parseInt(glitchBottom.css("bottom"), 10);

  // Support variable
  var supportVariable = true;

  // On Scroll
  $(window).on('scroll', function() {

      // // Capture the full length of the page
      // var windowHeight = $(document).height();

      // Capture where the top of the page is after scroll
      var currentPosition = $(document).scrollTop();

      // // Capture how many pixels can be viewed by the user
      // var windowViewingArea = $(window).height();

      // // Figure out the bottom of what the user has scrolled to
      // var bottomScrollPosition = currentPosition + windowViewingArea;
      //
      // // Figure out the rounded percentage of how much was scrolled
      // var percentScrolled = parseInt((bottomScrollPosition / windowHeight * 100).toFixed(0));

      // Animation -------------------------------------------------------------
      // ScrollDown !!!
      if( (lastScrollPosition - currentPosition) < 0 && (supportVariable === true) ) {

        // Start Animatiom --->
        // Glitch Top
        // Frame Start
        glitchTop.animate(
          {
            bottom: [glitchTopScrollDownPosition, "swing"],
            opacity: [glitchScrollOpacity, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );
        // Frame End
        glitchTop.animate(
          {
            bottom: [glitchTopBottomInitialPosition, "swing"],
            opacity: [glitchInitialOpacity, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );

        // Glitch Bottom
        // Frame Start
        glitchBottom.animate(
          {
            bottom: [glitchBottomScrollDownPosition, "swing"],
            opacity: [glitchScrollOpacity, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );
        // Frame End
        glitchBottom.animate(
          {
            bottom: [glitchTopBottomInitialPosition, "swing"],
            opacity: [glitchInitialOpacity, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );

        // Support Variable
        supportVariable = false
        console.log(supportVariable);
      }


      // ScrollUp !!!
      else if( (lastScrollPosition - currentPosition) > 0 && (supportVariable === true) ) {

        // Start Animatiom --->
        // Glitch Top
        // Frame Start
        glitchTop.animate(
          {
            bottom: [glitchTopScrollUpPosition, "swing"],
            opacity: [glitchScrollOpacity, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );
        // Frame End
        glitchTop.animate(
          {
            bottom: [glitchTopBottomInitialPosition, "swing"],
            opacity: [glitchInitialOpacity, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );

        // Glitch Bottom
        // Frame Start
        glitchBottom.animate(
          {
            bottom: [glitchBottomScrollUpPosition, "swing"],
            opacity: [glitchScrollOpacity, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );
        // Frame End
        console.log(glitchBottom.css("bottom"));
        glitchBottom.animate(
          {
            bottom: [glitchTopBottomInitialPosition, "swing"],
            opacity: [glitchInitialOpacity, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );
        console.log(glitchBottom.css("bottom"));

        // Support Variable
        supportVariable = false
        console.log(supportVariable);
      }

      // Update lastScrollPosition value with currentPosition value
      lastScrollPosition = currentPosition;

      setTimeout(function(){ var supportVariable = true }, 500);
  });
  // end On Scroll

});
// end Scroll Glitch
