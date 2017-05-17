function animateBorderOne(targetElement, speed) {
  $(targetElement).animate({right: "-=50px"}, {
    duration: speed,
    complete: function() {
      targetElement.animate({ right: "+=50px" }, {
        duration: speed,
        complete: function() {
          animateBorderOne(targetElement, speed);
        }
      });
    }
  });
};

animateBorderOne($('.animated-next-border-one'), 3000);


function animateBorderTwo(targetElement, speed) {
  $(targetElement).animate({ top: "-=50px"}, {
    duration: speed,
    complete: function() {
      targetElement.animate({ top: "+=50px" }, {
        duration: speed,
        complete: function() {
          animateBorderTwo(targetElement, speed);
        }
      });
    }
  });
};

animateBorderTwo($('.animated-next-border-two'), 3000);
