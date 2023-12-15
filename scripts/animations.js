function randomValues() {
    anime({
      targets: '.square, .square-2, .circle, .circle-2, .triangle, .triangle-2', 
      translateX: function() {
        return anime.random(-500, 500);
      },
          translateY: function() {
        return anime.random(-300, 300);
      },
          rotate: function() {
              return anime.random(0, 360);
          },
          scale: function() {
              return anime.random(.2, 2);
          },
      duration: 1000,
          easing: 'easeInOutQuad',
      complete: randomValues,
      });
  }
  
  randomValues();