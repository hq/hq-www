function animatethis(targetElement, speed) {
    $(targetElement).animate({right: "-=50px"},
    {
        duration: speed,
        complete: function ()
        {
            targetElement.animate({ right: "+=50px" },
            {
                duration: speed,
                complete: function ()
                {
                    animatethis(targetElement, speed);
                }
            });
        }
    });
};

animatethis($('.animated-next-border-one'), 3000);


function animatethisToo(targetElement, speed) {
    $(targetElement).animate({ top: "-=50px"},
    {
        duration: speed,
        complete: function ()
        {
            targetElement.animate({ top: "+=50px" },
            {
                duration: speed,
                complete: function ()
                {
                    animatethisToo(targetElement, speed);
                }
            });
        }
    });
};

animatethisToo($('.animated-next-border-two'), 3000);


// $(".animated-next-content").on("mouseover", function () {
//     $('.animated-next-border-one').stop(true);
//     $('.animated-next-border-two').stop(true);
// });
