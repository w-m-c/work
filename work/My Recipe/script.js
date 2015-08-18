$(document).ready(function(){
	console.log("Script included!");
	$('ol li').click(function() {
		$(this).wrap('<strike>');
	});
	
});

