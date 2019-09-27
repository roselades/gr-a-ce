function copyToClipboard(elementId){

	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(elementId).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);


	$("#alert").fadeIn(200).delay(4000).fadeOut(500)}

// GLOBAL JQUERY
$(document).ready(function() {

	$('.masterTooltip').hover(function(){
					// Hover over code
					var title = $(this).attr('title');
					$(this).data('tipText', title).removeAttr('title');
					$('<p class="tooltip"></p>')
					.text(title)
					.appendTo('body')
					.fadeIn('slow');
	}, function() {
					// Hover out code
					$(this).attr('title', $(this).data('tipText'));
					$('.tooltip').remove();
	}).mousemove(function(e) {
					var mousex = e.pageX + 20; //Get X coordinates
					var mousey = e.pageY - 30; //Get Y coordinates
					$('.tooltip')
					.css({ top: mousey, left: mousex })
	});

	// $("#message").on("click", function);


});
