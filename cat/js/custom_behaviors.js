$(document).ready(function() {

	$(window).resize(function() {
	if ($(window).height() <= 650 || $(window).width() <= 650){
		$(".tooSmall").css("display", "block");
	} else {
		$(".tooSmall").css("display", "none");
	}
})

	var animationState = 0
	var displayState = 1
	var name;
	var color;

	$(".readyButton").on("click", function(event){
		event.preventDefault();

		$(".overlay").animate({top: "-3000px", left: "+=50px"}, 5000);
	})

$(".confirmName").on("click", function(event){
		event.preventDefault();

		name = $(".nameInput").val();
		$("#name").html(name);

		$(".confirmation").animate({top: "60%"}, 750);
	})

	$(".yes").on("click", function(event){
		event.preventDefault();

		$(".nameOverlay").animate({top: "-2000px", left: "+=-300px"}, 4000);
		$(".confirmation").animate({top: "-2000px", left: "+=400px"}, 5000);
		$("#name2").html(name);

		$("#smallPaper").animate({top: "50px"}, 1000)
		$("#smallerPaper").animate({top: "80%"}, 1000)
		$(".options").animate({top: "50%"}, 1000)
	})

	$(".no").on("click", function(event){
		event.preventDefault();

		$(".confirmation").animate({top: "-2000px"}, 4000);
	})

	$(".option1").on("click", function(event){
		$(".white").css("animation-play-state", "running")
		$(".black").css("animation-play-state", "paused")
		color = 1
		console.log(color)
	})

	$(".option2").on("click", function(event){
		$(".white").css("animation-play-state", "paused")
		$(".black").css("animation-play-state", "running")
		color = 2
		console.log(color)
	})


$('.submit').on('click', function(event){
		event.preventDefault();

		if(color === 1){
			window.location = "page2.html?name="+name;
		}else if(color === 2){
			window.location = "page3.html?name="+name;
		}else{
			console.log(pet)
		}

});

	// VARIABLES


	// EVENT HANDLERS


	// FUNCTIONS


	// INITIALIZATION


});
