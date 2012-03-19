$(document).ready(function() {
	
	$('.tabs a').on('click', function(ev){
		var currentTab = $(this).attr('href');
			
	
		$('.tab-content .current').removeClass('current');		
		
		$('.tab-content div:not(.current)').hide(300);
		$(currentTab).addClass('current').show(300);	

	});

	$('.ajax-in').on('click', function(ev) {
		// AJAX paths are relative to the HTML file, not the JS file
		$('.fill-me').load('one-in.html');
	});
});
