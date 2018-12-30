$(document).ready(function() {

	$(".linkedInContainer").hover(function(){
		$(".linkedIn").css("display", "none");
		$(".linkedInShadow").css("display", "block");

	},
	function(){
		$(".linkedIn").css("display", "block");
		$(".linkedInShadow").css("display", "none");
	});

	$(".behanceContainer").hover(function(){
		$(".behance").css("display", "none");
		$(".behanceShadow").css("display", "block");

	},
	function(){
		$(".behance").css("display", "block");
		$(".behanceShadow").css("display", "none");
	});

});
