function animateBorderOne(targetElement, speed) {
  $(targetElement).animate({ top: "50px", right: "-50px",  }, {
    duration: speed,
    complete: function() {
      targetElement.animate({ top: "-50px", right: "+50px",  }, {
        duration: speed,
        complete: function() {
          animateBorderOne(targetElement, speed);
        }
      });
    }
  });
};

animateBorderOne($('.animated-next-border-one'), 4000);


function animateBorderTwo(targetElement, speed) {
  $(targetElement).animate({ top: "-50px", right: "+50px" }, {
    duration: speed,
    complete: function() {
      targetElement.animate({ top: "+50px", right: "-50px" }, {
        duration: speed,
        complete: function() {
          animateBorderTwo(targetElement, speed);
        }
      });
    }
  });
};

animateBorderTwo($('.animated-next-border-two'), 4000);
