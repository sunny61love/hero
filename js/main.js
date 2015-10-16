$(document).ready(function(){
	$('img[alt="Batman"]').addClass('shown');
	
	});
$(document).ready(function(){
	$('img[alt="Batman"]').addClass('shown')
	
	$('.name').text('superher');
});
$(document).ready(function(){
	
	$('img:first').addClass('shown')
	
	$('.name').text('Batman')

});

$('.next').click(function(e){

$('img:first').removeClass('shown')
	
$('img:first').next().addClass('shown')


	
});