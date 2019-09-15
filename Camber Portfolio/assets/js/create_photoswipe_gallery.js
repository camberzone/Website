var gallery;
var items = [];

(function($) {
	
	
	$('.photoswipegalleryimage').each(function( index ) {
		var img_for_photoswipe = 
		{
			src: null,
			w: null,
			h: null,
			title: null
		}
		
		img_for_photoswipe.src = this.src
		
		var imgcool = new Image();
		
		imgcool.onload = function(){
			var height = imgcool.height;
			var width = imgcool.width;

			img_for_photoswipe.w = width;
			img_for_photoswipe.h = height;
		}
					
		imgcool.src = img_for_photoswipe.src;
		
		img_for_photoswipe.title = this.title;
		
		items.push(img_for_photoswipe);
		
		
	});
	
	$('.photoswipegalleryimage').click(function(index){ openPhotoSwipeWithIndex(index) });
	
	function restoreHeader()
	{
		 document.getElementById("header").style.display = 'block';
	};

var openPhotoSwipe = function(index) {
	document.getElementById("header").style.display = 'none';

	var pswpElement = document.querySelectorAll('.pswp')[0];
		
	// define options (if needed)
	var options = {
		// optionName: 'option value'
		// for example:
		index: index, // start at first slide
	};

	gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
	gallery.listen('destroy', restoreHeader);
};

var openPhotoSwipeWithIndex = function(index) {
	openPhotoSwipe(index);
};

})(jQuery);