"use strict";

;(function($){
	var accordeon = $('.js-acordeon');

    accordeon.on('click', function() {
    	$(this).find('img').toggleClass('opacity');
        $(this).find('.content__description').toggleClass('is-active');
        $(this).find('.learn-more').toggleClass('link-active');
    });

}(jQuery));