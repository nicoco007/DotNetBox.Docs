jQuery(document).ready(function() {
	if (jQuery('.wy-menu-vertical li.current').length) {
		var offset = jQuery('.wy-menu-vertical li.current').position().top;
		jQuery('.wy-side-scroll').scrollTop(offset-300);
	}
});