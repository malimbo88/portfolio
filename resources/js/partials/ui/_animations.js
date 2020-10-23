// JQuery
var $ = require( "jquery" );

// Scroll Glitch
$(function() {

  // Last Scroll Position
  var lastScrollTop = 0

  // On Scroll
  $(window).on('scroll', function() {

      // Capture the full length of the page
      var windowHeight = $(document).height();

      // Capture where the top of the page is after scroll
      var currentPosition = $(document).scrollTop();

      // Capture how many pixels can be viewed by the user
      var windowViewingArea = $(window).height();

      // Figure out the bottom of what the user has scrolled to
      var bottomScrollPosition = currentPosition + windowViewingArea;

      // Figure out the rounded percentage of how much was scrolled
      var percentScrolled = parseInt((bottomScrollPosition / windowHeight * 100).toFixed(0));

      // Animation

      // Elements to animate
      var glitchTop = $(".glitch_top");
      var glitchBottom = $(".glitch_bottom");

      // Animation time
      var scrollAnimationDuration = 300;

      // Scroll state
      var scrollState = "scrollOn";

      // Animation Condition
      // -> If i !!! ScrollDown !!! the page
      if( ( currentPosition > lastScrollTop ) && ( scrollState === 'scrollOn' ) ) {

        // Start animation
        // ->-> Element on TOP of the animation
        // ->->-> Frame 1
        console.log(scrollState)
        glitchTop.animate(
          {
            bottom: [-8, "swing"],
            opacity: [0, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );

        // ->->-> Frame 2
        glitchTop.animate(
          {
            bottom: [12, "swing"],
            opacity: [0.5, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );

        // ->->-> Frame 3
        glitchTop.animate(
          {
            bottom: [-8, "swing"],
            opacity: [0, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );

        // ->-> Element on BOTTOM of the animation
        // ->->-> Frame 1
        glitchBottom.animate(
          {
            bottom: [-8, "swing"],
            opacity: [0, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );

        // ->->-> Frame 2
        glitchBottom.animate(
          {
            bottom: [2, "swing"],
            opacity: [0.5, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          },
        );

        // ->->-> Frame 3
        glitchBottom.animate(
          {
            bottom: [-8, "swing"],
            opacity: [0, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          },
        );

          // Change the scroll state
          scrollState = 'scrollEnd';
      }

      // -> If i !!! ScrollUp !!! the page
      else if( ( currentPosition < lastScrollTop) && ( scrollState === 'scrollOn' ) ) {

        // Start animation
        // ->-> Element on TOP of the animation
        // ->->-> Frame 1
        console.log(scrollState)
        glitchTop.animate(
          {
            bottom: [-8, "swing"],
            opacity: [0, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );

        // ->->-> Frame 2
        glitchTop.animate(
          {
            bottom: [-28, "swing"],
            opacity: [0.5, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );

        // ->->-> Frame 3
        glitchTop.animate(
          {
            bottom: [-8, "swing"],
            opacity: [0, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );

        // ->-> Element on BOTTOM of the animation
        // ->->-> Frame 1
        glitchBottom.animate(
          {
            bottom: [-8, "swing"],
            opacity: [0, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          }
        );

        // ->->-> Frame 2
        glitchBottom.animate(
          {
            bottom: [-18, "swing"],
            opacity: [0.5, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          },
        );

        // ->->-> Frame 3
        glitchBottom.animate(
          {
            bottom: [-8, "swing"],
            opacity: [0, "swing"],
          },
          {
            duration: scrollAnimationDuration,
          },
        );

          // Change the scroll state
          scrollState = 'scrollEnd';
      }

      // -> After scrolled
      if( scrollState === 'scrollEnd' ) {
        // ->-> Stop animation
        console.log(scrollState)
        setTimeout(function(){ glitchTop.stop(true, false); }, 900);
        setTimeout(function(){ glitchBottom.stop(true, false); }, 900);

        // Change the scroll state
        scrollState = 'scrollOn';
      }

      // Update last scroll position
      lastScrollTop = currentPosition;
  });
  // end On Scroll

});
// end Scroll Glitch
