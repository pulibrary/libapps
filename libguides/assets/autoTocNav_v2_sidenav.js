// Written by Jeremy Darrington, Princeton University Library, http://libguides.princeton.edu/politics
// Let me know if you have suggestions for improvements, bug fixes, etc.
// This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License, 
// http://creativecommons.org/licenses/by-nc-sa/4.0/

// Put all of your content boxes in the second column and create an empty box in the left column for the TOC
// If using on just one page, then in the TOC box add a Media/Widget content item and enter the links for the script and CSS
$(document).ready(function() {
	var $boxIDs = [];
	var $boxTitle = [];
// get box titles
	$('div[id="s-lg-col-2"] .s-lib-box-title').each(function() {		
		$boxTitle.push($(this).text());
	});
// get box IDs for second column only		
	$('div[id="s-lg-col-2"] div.s-lib-box').each(function() {		
		var patt2 = /s-lg-box-\d+$/;
		// $(this).prepend("<p>Found this box</p>"); for testing
		if (patt2.test($(this).attr("id"))) {
			$boxIDs.push($(this).attr("id"));
		} 
	});
//populate the nav box with box titles
	var $tocBox = $('div[id="s-lg-col-1"] div[id^="s-lg-box-collapse-"]');
	$tocBox.prepend('<ul class="list-group s-lg-boxnav"></ul>');
	for (i=0; i<$boxTitle.length; i++) {
		$('ul.s-lg-boxnav').append('<li class="list-group-item boxNav"><a href="#'+$boxIDs[i]+'">'+$boxTitle[i]+'</a>');
	}
// if url is for an indiv box, select that one and hide other content boxes; if not, show only first content box 
// and make the first TOC entry the currently selected item
	if (location.hash) {
			var $boxNum = location.hash.slice(+1);	 
			for (i=0; i<$boxIDs.length; i++) {
				if ($boxIDs[i]==$boxNum) { 
					$('div[id='+$boxIDs[i]+']').show();
					window.scrollTo(0,0);
					$('a[href="#'+$boxNum+'"]').parent().addClass('currentNav').prepend('<i class="fa fa-angle-double-right fa-lg fa-fw"></i>');
				}
				else {
					$('div[id='+$boxIDs[i]+']').hide();
				}
			}
		}
	else {		
		for (i=1; i<$boxIDs.length; i++) {
			$('div[id='+$boxIDs[i]+']').hide();					
		}
		$('li.list-group-item').filter(':first').addClass('currentNav').prepend('<i class="fa fa-angle-double-right fa-lg fa-fw"></i>');
		}	
//show the selected box when clicked
	$('.boxNav').click(function() {
    	var selectedNav = $('.currentNav');
	    $(selectedNav).toggleClass('currentNav');
	    $(this).prepend($('.fa-angle-double-right')); // move the font awesome <i> tag to the item clicked on
	    $(this).toggleClass('currentNav');	    
	    for (i=0; i<$boxIDs.length; i++) {
			if ($(this).find("a").attr("href").slice(1) == $boxIDs[i]) { // need to slice this because the href begins with #
				$('div[id='+$boxIDs[i]+']').show();
				window.location.hash = $boxIDs[i];
				window.scrollTo(0,0);
			} else {
				$('div[id='+$boxIDs[i]+']').hide();				
			}
		}
	});
});
