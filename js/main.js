"use strict";

;(function($){
	var accordeon = $('.js-acordeon');

    accordeon.on('click', function() {
    	//$(this).find('img').toggleClass('opacity');
        $(this).find('.content__description').toggleClass('is-active');
        $(this).find('.learn-more').toggleClass('link-active');
    });

    accordeon.on('mouseover', function() {
		$(this).find('img').addClass('opacity');
    });

    accordeon.on('mouseout', function() {
	$(this).find('img').removeClass('opacity');
    });

}(jQuery));