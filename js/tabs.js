$(document).ready(function() {
	
	$('.tabs a').on('click', function(ev){
		var currentTab = $(this).attr('href');
			
		$('.fil-me .current').removeClass('current');		
		
		$('.fill-me div:not(.current)').hide(500);
		$(currentTab).addClass('current').show(500);	

	});

	$('.ajax-one-in').on('click', function(ev) {
		$('.fill-me').load('one-in.html').show(300);
	});
	
	$('.ajax-two-in').on('click', function(ev) {
		$('.fill-me').load('two-in.html').show(300);
	});
	
	$('.ajax-three-in').on('click', function(ev) {
		$('.fill-me').load('three-in.html').show(300);
	});
	
	$('.ajax-four-in').on('click', function(ev) {
		$('.fill-me').load('four-in.html').show(300);
	});
});
