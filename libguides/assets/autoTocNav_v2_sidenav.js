// Written by Jeremy Darrington, Princeton University Library, http://libguides.princeton.edu/politics
// Let me know if you have suggestions for improvements, bug fixes, etc.
// This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License, 
// http://creativecommons.org/licenses/by-nc-sa/4.0/

// I need to fix the window scrolling issue with long boxes.

//you need to first put all your boxes in the center column and create an empty box in the left column for the TOC
$(document).ready(function() {
	var $boxIDs = [];
//get box IDs
	$('div#s-lg-col-1 div[id^="s-lg-box-"]').each(function() {	
		var patt1 = /s-lg-box-\d+$/;				
		if (patt1.exec($(this).attr("id"))) {
			$boxIDs.push($(this).attr("id"));
		} 
	});	
// fix the scrolling problem by adding an <a> tag with the box title text that doesn't use the anchor bookmark
	$('ul.s-lg-boxnav a').each(function() {
		var aText = $(this).text();
		$(this).empty();				
		$("<a>"+aText+"</a>").insertAfter($(this));				
	});
		
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
	$('li.list-group-item').addClass('boxNav');
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
				// $('html').scrollTop(0);
				// $('div[id='+$boxIDs[i]+']').prepend($vertLoc);	
			} else {
				$('div[id='+$boxIDs[i]+']').hide();				
			}
		};			
	});
});