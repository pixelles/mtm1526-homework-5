$(document).ready(function() {
	
	$('.tabs a').on('click', function(ev){
		var currentTab = $(this).attr('href');
			
		$('.tab-content .current').removeClass('current');		
		
		$('.tab-content div:not(.current)').hide(300);
		$(currentTab).addClass('current').show(300);	

	});

	$('.ajax-one-in').on('click', function(ev) {
		$('.fill-me').load('one-in.html');
	});
	
	$('.ajax-two-in').on('click', function(ev) {
		$('.fill-me').load('two-in.html');
	});
	
	$('.ajax-three-in').on('click', function(ev) {
		$('.fill-me').load('three-in.html');
	});
	
	$('.ajax-four-in').on('click', function(ev) {
		$('.fill-me').load('four-in.html');
	});
});
