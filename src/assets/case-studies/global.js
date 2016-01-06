/***********************\
    Global
\***********************/

jQuery(document).ready(function($){
    //check if the .cd-image-container is in the viewport 
    //if yes, animate it
    checkPosition($('.cd-image-container'));
    $(window).on('scroll', function(){
        checkPosition($('.cd-image-container'));
    });
    
    //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
    $('.cd-image-container').each(function(){
        var actual = $(this);
        drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
    });

    //upadate images label visibility
    $(window).on('resize', function(){
    	var sliderHeight = $(".cd-image-container").height()+50;
    	$( "body" ).append('<style>.cd-handle {top: '+ (sliderHeight+15) +'px;}.cd-handle:after{height: ' + sliderHeight + 'px; top: -' + sliderHeight + 'px;}</style>');
    });
});

function checkPosition(container) {
    container.each(function(){
        var actualContainer = $(this);
        if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
            actualContainer.addClass('is-visible');
        }
    });
}

//draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
    dragElement.on("mousedown vmousedown", function(e) {
        dragElement.addClass('draggable');
        resizeElement.addClass('resizable');

        var dragWidth = dragElement.outerWidth(),
            xPosition = dragElement.offset().left + dragWidth - e.pageX,
            containerOffset = container.offset().left,
            containerWidth = container.outerWidth(),
            minLeft = containerOffset + 10,
            maxLeft = containerOffset + containerWidth - dragWidth - 10;
        
        dragElement.parents().on("mousemove vmousemove", function(e) {
            leftValue = e.pageX + xPosition - dragWidth;
            
            //constrain the draggable element to move inside his container
            if(leftValue < minLeft ) {
                leftValue = minLeft;
            } else if ( leftValue > maxLeft) {
                leftValue = maxLeft;
            }

            widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
            
            $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
                $(this).removeClass('draggable');
                resizeElement.removeClass('resizable');
            });

            $('.resizable').css('width', widthValue); 
            
        }).on("mouseup vmouseup", function(e){
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
        e.preventDefault();
    }).on("mouseup vmouseup", function(e) {
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
    });
}


(function() {
    $(document).ready(function() {

    	var isMobile = false; //initiate as false
		// device detection
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
    	
    	if(isMobile == false && $(window).width() >= 800){

			var s = skrollr.init({
	    		forceHeight: false,
	    		smoothScrolling: true
	    	});

	    	var waypoints = $('.cssTransition').waypoint(function(direction) {
			  //notify(this.element.id + ' hit 25% from top of window'
			  	//alert();
			  if(direction == "down"){
			  	$(this.element).addClass("animation");
			  }else{
			  	//$(this.element).removeClass("animation");
			  }
			}, {
			  offset: '25%'
			});

			var waypoints = $('.cssTransition-2').waypoint(function(direction) {
			  //notify(this.element.id + ' hit 25% from top of window'
			  	//alert();
			  if(direction == "down"){
			  	$(this.element).addClass("animation");
			  }else{
			  	//$(this.element).removeClass("animation");
			  }
			}, {
			  offset: '80%'
			});

			var waypoints = $('.cssTransition-3').waypoint(function(direction) {
			  //notify(this.element.id + ' hit 25% from top of window'
			  	//alert();
			  if(direction == "down"){
			  	$(this.element).addClass("animation");
			  }else{
			  	//$(this.element).removeClass("animation");
			  }
			}, {
			  offset: '50%'
			});

			var waypoints = $('.paragraph-animation p, .paragraph-animation h1').waypoint(function(direction) {
			  //notify(this.element.id + ' hit 25% from top of window'
			  	//alert();
			  if(direction == "down"){
			  	$(this.element).addClass("animation");
			  }else{
			  	//$(this.element).removeClass("animation");
			  }
			}, {
			  offset: '70%'
			});

    	}


		
		//Nav Collapse
		var scrollAmount = 0;
		$(window).scroll(function(){
			scrollAmount++;
			if(scrollAmount >= 25){
				scrollAmount = 0;
				$('#menu').removeClass('show-menu');
			}
		});
		$('.icon-three-dots').click(function(){
			$("html, body").stop();
			$('#menu').addClass('show-menu');
		})
		
		
		//Text input shrinking placeholders
		$('.js-inpt-placeholder-grp').each(function(){
			var placeholderLength = $(this).find('span').width();
			$(this).find('p').css('min-width',''+placeholderLength+'px');
		});
		$('.js-inpt-placeholder-grp p').on('keyup', function(){
			var input = $(this).parent().find('input');
			input.val($(this).text());
		});
		$('.js-inpt-placeholder-grp p').on('focus',function(){
			var placeholder = $(this).parent().find('span');
			placeholder.addClass('small');
		});
		$('.js-inpt-placeholder-grp p').focusout(function(){
			var placeholder = $(this).parent().find('span');
			var input = $(this).parent().find('input');
			if(input.val().length == 0){
				placeholder.removeClass('small');
			}
		});
		
		//Custom Select Box
		$('.js-select-placeholder-grp span').on('focus', function(){
			console.log('hello');
			var list = $(this).parent().find('ul');
			list.addClass('show');
		});
		$('.js-select-placeholder-grp span').on('focusout', function(){
			var list = $(this).parent().find('ul');
			list.removeClass('show');
		});
		
		
		//Modal
		$('.js-show-modal').click(function(e){
			$('#contact-us').addClass('open');
			$('body').addClass('noscroll');
			e.preventDefault();
		})
		
		$('#contact-us .icon-x').click(function(){
			$('#contact-us').removeClass('open');
			$('body').removeClass('noscroll');
		})
		
		//Outline Animation
		var out1top, out1left, out2top, out2left;
	    
	    $('.outline-animation').on('mouseenter', function(){
		    
		    var outline1 = $(this).find('.outline-1');
		    var outline2 = $(this).find('.outline-2');
		   
			outline1.css('-webkit-animation-play-state','paused');
		    outline2.css('-webkit-animation-play-state','paused');
		    
		    out1top = outline1.position().top+10;
		    out1left = outline1.position().left+10;
		    out2top = outline2.position().top+15;
		    out2left = outline2.position().left+15;
		    
		    
		    outline1.animate({
			    top:'-='+out1top+'px',
			    left:'-='+out1left+'px'
		    },
			{
				duration: 100, 
				easing: 'easeInOutBack' 
			});
		    
		    outline2.animate({
			    top:'-='+out2top+'px',
			    left:'-='+out2left+'px'
		    },
			{ 
				duration: 100, 
				easing: 'easeInOutBack' 
			});

	    })
	    $('.outline-animation').on('mouseleave', function(){
		    
		    var outline1 = $(this).find('.outline-1');
		    var outline2 = $(this).find('.outline-2');
		    
		    outline1.animate({
			    top:'='+out1top+'px',
			    left:'='+out1left+'px'
		    },100, 'easeInOutBack', function(){
			    outline1.css('-webkit-animation-play-state','running')
		    });
		    
		    outline2.animate({
			    top:'='+out2top+'px',
			    left:'='+out2left+'px'
		    },100, 'easeInOutBack', function(){
			     outline2.css('-webkit-animation-play-state','running')
		    });
		    
	    })
		
		//autoscroll
		/*
		var scrollSpeed = 1000;
		var lastScrollTop = $(window).scrollTop();
		$(window).scroll(function(event){
		   var st = $(this).scrollTop();
		   if (st > lastScrollTop){
		       $("html, body").stop().animate({ scrollTop: $(document).height() }, scrollSpeed);
		   } else {
		       $("html, body").stop().animate({ scrollTop: 0 }, scrollSpeed);
		   }
		   lastScrollTop = st;
		});
*/
		
		//Parallax
		$(window).scroll(function(){
			//Parallax Effect
			$('.parallax-layer').each(function(){	
				var speed = $(this).data('parallax-speed');
				var offset = $(this).data('parallax-offset');
				var scrollTop = $(window).scrollTop();
				var top = -(speed/10)*(scrollTop-offset);
				
				$(this).css('top',''+top+'px');
			})
		})
		if ( $( ".case-study-provigil .cd-handle" ).length ) {
		    var sliderHeight = $(".cd-image-container").height()+50;
		    //alert(sliderHeight);
		    //$(".cd-handle:after").css('height','11');
		    $( "body" ).append('<style>.cd-handle {top: '+ (sliderHeight+15) +'px;}.cd-handle:after{height: ' + sliderHeight + 'px; top: -' + sliderHeight + 'px;}</style>');
		 	//document.styleSheets[1].insertRule('.cd-image-container:before { height: ' +  sliderHeight+'; }', 0);


		}

		
		
    });


})();

















