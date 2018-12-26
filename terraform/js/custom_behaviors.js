$(document).ready(function() {
	//LOADING SCREEN CODE
		//PLEASE NOTE: WHEN RETURNING FROM THE LEARN MORE PAGE, INDEX LOADING PAGE STAYS INFINITELY IF SITE IS BEING ACCESSED LOCALLY. WHEN ACCESSED FROM DESWEB, THERE IS NO INFINITE LOADING ISSUE.
	$(window).on("load", function(){
		$(".loadingScreen").fadeOut(350, function(){
			$(".loadingScreen").remove();
		})
		audio.play();
		});


	//TOOLTIP CODE
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
	        var mousey = e.pageY + 10; //Get Y coordinates
	        $('.tooltip')
	        .css({ top: mousey, left: mousex })
	});
		//TOOLTIP FOR THE RIGHT NAV
	$('.masterTooltip2').hover(function(){
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
					var mousex = e.pageX + -140; //Get X coordinates
					var mousey = e.pageY + 10; //Get Y coordinates
					$('.tooltip')
					.css({ top: mousey, left: mousex })
	});

	// DETECT BROWSER, OVERLAY IF NOT FIREFOX

	function browserDetection() {
	 if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
	{
			$(".browserOverlay").css("display", "block")
	}
	else if(navigator.userAgent.indexOf("Chrome") != -1 )
	{
			$(".browserOverlay").css("display", "block")
	}
	else if(navigator.userAgent.indexOf("Safari") != -1)
	{
			$(".browserOverlay").css("display", "block")
	}
	else if(navigator.userAgent.indexOf("Firefox") != -1 )
	{
			 $(".browserOverlay").css("display", "none")
	}
	else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
	{
		$(".browserOverlay").css("display", "block")
	}
	else
	{
		 $(".browserOverlay").css("display", "block")
	}
	}

	//CALLING BROWSER DETECTION IMMEDIATELY

	browserDetection();

	//BUTTON FUNCTIONALITY
	$(".begin").on("click", function(event){
		event.preventDefault();

		$(".introOverlay").fadeOut(2000);
		$(".one").fadeIn(2000);
		$(".two").fadeIn(2000);
		$(".light").fadeIn(2000);
	})

	$(".light").on("click", function(event){
		event.preventDefault();

		$(".day1").fadeOut(2000);

		$(".planet").css("background-color", "#807255");
		$(".shading").fadeIn(2000);
		$(".water1").fadeIn(2000);
		$(".barren").fadeIn(2000);
		$(".audioOnOffBlack").fadeIn(250);
		$(".audioOnOffWhite").fadeOut(250);
	})

	$(".continue1").on("click", function(event){
		event.preventDefault();

		$(".phaseOne").animate({top: "-=100px", opacity: 0}, 1000, function() {
			$(".phaseOne").css("display", "none")
		})

		$(".phaseTwo").fadeIn(1000);

	})

	$(".continue2").on("click", function(event){
		event.preventDefault();

		$(".phaseTwo").animate({top: "-=100px", opacity: 0}, 1000, function() {
			$(".phaseTwo").css("display", "none")
		})

		$(".phaseThree").fadeIn(2000);

	})

	$(".continue3").on("click", function(event){
		event.preventDefault();

		$(".phaseThree").animate({top: "-=100px", opacity: 0}, 1000, function() {
			$(".phaseThree").css("display", "none")
		})

		$(".phaseFour").fadeIn(2000);

	})

	$(".continue4").on("click", function(event){
		event.preventDefault();

		$(".phaseFour").animate({top: "-=100px", opacity: 0}, 1000, function() {
			$(".phaseFour").css("display", "none")
		})

		$(".phaseFive").fadeIn(2000);

	})

	$(".continue5").on("click", function(event){
		event.preventDefault();

		$(".phaseFive").animate({top: "-=100px", opacity: 0}, 1000, function() {
			$(".phaseFive").css("display", "none")
		})

		$(".phaseSix").fadeIn(2000);
		$(".humans1").fadeIn(250);

	})

	$(".continue6").on("click", function(event){
		event.preventDefault();

		$(".phaseSix").animate({top: "-=100px", opacity: 0}, 1000, function() {
			$(".phaseSix").css("display", "none")
		})

		$(".phaseSeven").fadeIn(2000);

	})
		//CONTINUE7 CONTAINS ALL FUNCTIONS FOR DESTROYING THE PLANET
	$(".continue7").on("click", function(event){
		event.preventDefault();

		$(".phaseSeven").animate({top: "-=100px", opacity: 0}, 1000, function() {
			$(".phaseSeven").css("display", "none")
		})

		$(audio).animate({volume: 0}, 1000)

		$(".restImage").fadeIn(1000, function(){

			var rumbleSrc = "audio/rumble.mp3";
			var rumble = new Audio();
			rumble.src= rumbleSrc;
			rumble.play();

			$(".water1").delay(1500).css("background-image", "url(images/ruined/water1Bad.png)");
			$(".water2").delay(1500).css("background-image", "url(images/ruined/water2Bad.png)");
			$(".water3").delay(1500).css("background-image", "url(images/ruined/water3Bad.png)");
			$(".water4").delay(1500).css("background-image", "url(images/ruined/water4Bad.png)");
			$(".water5").delay(1500).css("background-image", "url(images/ruined/water5Bad.png)");
			$(".barren").fadeOut();
			$(".somewhatBarren").fadeOut();
			$(".somewhatMountain").fadeOut();
			$(".mountains").fadeOut();
			$(".terrainBad").css("display", "block");
			$(".cold").fadeOut();
			$(".warm").fadeOut();
			$(".fire").css("display", "block");
			$(".creatures1").delay(1500).css("background-image", "url(images/ruined/creatures1Dead.png)");
			$(".creatures2").delay(1500).css("background-image", "url(images/ruined/creatures2Dead.png)");
			$(".creatures3").delay(1500).css("background-image", "url(images/ruined/creatures3Dead.png)");
			$(".creatures4").delay(1500).css("background-image", "url(images/ruined/creatures4Dead.png)");
			$(".humans1").delay(1500).css("background-image", "url(images/ruined/humans1Dead.png)");
			$(".humans2").delay(1500).css("background-image", "url(images/ruined/humans2Dead.png)");
			$(".humans3").delay(1500).css("background-image", "url(images/ruined/humans3Dead.png)");
			$(".humans4").delay(1500).css("background-image", "url(images/ruined/humans4Dead.png)");
			$(".humans5").delay(1500).css("background-image", "url(images/ruined/humans5Dead.png)");
			$(".background").css("background", "-moz-linear-gradient(top, rgba(170,143,109,1) 0%, rgba(107,97,71,1) 100%)");
			$(".rightNav").css("display", "none");
			source = "audio/data.mp3"
			audio.src = source;
			audio.pause();
			audio.load();
			audio.play();

		})

		.delay(3000).fadeOut(2000, function(){
			$(".phaseEight").fadeIn(1000, function(){
			});
			$(audio).animate({volume: 1.0}, 1000)
		});

	})

	$(".continue8").on("click", function(event){
		event.preventDefault();

		$(".phaseEight").animate({top: "-=100px", opacity: 0}, 1000, function() {
			$(".phaseEight").css("display", "none")
		})

		$(".phaseNine").fadeIn(2000);

	})

	$(".continue9").on("click", function(event){
		event.preventDefault();

		$(".phaseNine").animate({top: "-=100px", opacity: 0}, 1000, function() {
			$(".phaseNine").css("display", "none")
		})

		$(".phaseTen").fadeIn(2000);

	})

	$(".continue10").on("click", function(event){
		event.preventDefault();

		$(".phaseTen").animate({top: "-=100px", opacity: 0}, 1000, function() {
			$(".phaseTen").css("display", "none")
		})

		$(".phaseEleven").fadeIn(2000);

	})

	$(".continue11").on("click", function(event){
		event.preventDefault();

		$(".phaseEleven").animate({top: "-=100px", opacity: 0}, 1000, function() {
			$(".phaseEleven").css("display", "none")
		})

		$(".phaseTwelve").fadeIn(2000);

	})

	$(".continue12").on("click", function(event){
		event.preventDefault();

		$(".phaseTwelve").animate({top: "-=100px", opacity: 0}, 1000, function() {
			$(".phaseTwelve").css("display", "none")
		})

		$(".phaseThirteen").fadeIn(2000);

	})

	$(".continue13").on("click", function(event){
		event.preventDefault();

		$(".phaseThirteen").animate({top: "-=100px", opacity: 0}, 1000, function() {
			$(".phaseThirteen").css("display", "none")
		})

		$(".phaseFourteen").fadeIn(2000);

	})

	//NAVIGATION FUNCTIONALITY

	$(".first").on("click", function(event){
		event.preventDefault();

		$(".phaseOne").fadeIn(500)
		$(".phaseTwo").fadeOut(250)
		$(".phaseThree").fadeOut(250)
		$(".phaseFour").fadeOut(250)
		$(".phaseFive").fadeOut(250)
		$(".phaseSix").fadeOut(250)
	})

	$(".second").on("click", function(event){
		event.preventDefault();

		$(".phaseOne").fadeOut(250)
		$(".phaseTwo").fadeIn(500)
		$(".phaseThree").fadeOut(250)
		$(".phaseFour").fadeOut(250)
		$(".phaseFive").fadeOut(250)
		$(".phaseSix").fadeOut(250)
	})

	$(".third").on("click", function(event){
		event.preventDefault();

		$(".phaseOne").fadeOut(250)
		$(".phaseTwo").fadeOut(250)
		$(".phaseThree").fadeIn(500)
		$(".phaseFour").fadeOut(250)
		$(".phaseFive").fadeOut(250)
		$(".phaseSix").fadeOut(250)
	})

	$(".fourth").on("click", function(event){
		event.preventDefault();

		$(".phaseOne").fadeOut(250)
		$(".phaseTwo").fadeOut(250)
		$(".phaseThree").fadeOut(250)
		$(".phaseFour").fadeIn(500)
		$(".phaseFive").fadeOut(250)
		$(".phaseSix").fadeOut(250)
	})

	$(".fifth").on("click", function(event){
		event.preventDefault();

		$(".phaseOne").fadeOut(250)
		$(".phaseTwo").fadeOut(250)
		$(".phaseThree").fadeOut(250)
		$(".phaseFour").fadeOut(250)
		$(".phaseFive").fadeIn(500)
		$(".phaseSix").fadeOut(250)
	})

	$(".sixth").on("click", function(event){
		event.preventDefault();

		$(".phaseOne").fadeOut(250)
		$(".phaseTwo").fadeOut(250)
		$(".phaseThree").fadeOut(250)
		$(".phaseFour").fadeOut(250)
		$(".phaseFive").fadeOut(250)
		$(".phaseSix").fadeIn()
	})

	//RANGE FUNCTIONALITY

	$("input#lightRange").on("change", function() {
		var opacity = ($(this).val())/100;
		$(".background").css("opacity", opacity)

		if (opacity<0.4){
			$("h1").css("color", "white");
			$("p").css("color", "white");
			$(".button").css("color", "white");
			$(".option").css("background-color", "white")
			$(".audioOnOffBlack").fadeOut(250);
			$(".audioOnOffWhite").fadeIn(250);
		}else {
			$("h1").css("color", "rgb(40, 40, 40)");
			$("p").css("color", "rgb(40, 40, 40)");
			$(".button").css("color", "rgb(40, 40, 40)");
			$(".option").css("background-color", "rgb(40, 40, 40)")
			$(".audioOnOffBlack").fadeIn(250);
			$(".audioOnOffWhite").fadeOut(250);
		}
	});

	$("input#waterRange").on("change", function() {
		var amount = ($(this).val());

		if (amount == 0){
			$(".water1").fadeOut(250);
			$(".water2").fadeOut(250);
			$(".water3").fadeOut(250);
			$(".water4").fadeOut(250);
			$(".water5").fadeOut(250);
		}else if(amount == 1) {
			$(".water1").fadeIn(250);
			$(".water2").fadeOut(250);
			$(".water3").fadeOut(250);
			$(".water4").fadeOut(250);
			$(".water5").fadeOut(250);
		} else if (amount == 2) {
			$(".water1").fadeOut(250);
			$(".water2").fadeIn(250);
			$(".water3").fadeOut(250);
			$(".water4").fadeOut(250);
			$(".water5").fadeOut(250);
		} else if (amount == 3) {
			$(".water1").fadeOut(250);
			$(".water2").fadeOut(250);
			$(".water3").fadeIn(250);
			$(".water4").fadeOut(250);
			$(".water5").fadeOut(250);
		} else if (amount == 4) {
			$(".water1").fadeOut(250);
			$(".water2").fadeOut(250);
			$(".water3").fadeOut(250);
			$(".water4").fadeIn(250);
			$(".water5").fadeOut(250);
		} else {
			$(".water1").fadeOut(250);
			$(".water2").fadeOut(250);
			$(".water3").fadeOut(250);
			$(".water4").fadeOut(250);
			$(".water5").fadeIn(250);
		}
	});

	$("input#terrainRange").on("change", function() {
		var amount = ($(this).val());

		if (amount == 0){
			$(".barren").fadeIn(250);
			$(".somewhatBarren").fadeOut(250);
			$(".somewhatMountain").fadeOut(250);
			$(".mountains").fadeOut(250);
		}else if(amount == 1) {
			$(".barren").fadeOut(250);
			$(".somewhatBarren").fadeIn(250);
			$(".somewhatMountain").fadeOut(250);
			$(".mountains").fadeOut(250);
		} else if (amount == 2) {
			$(".barren").fadeOut(250);
			$(".somewhatBarren").fadeOut(250);
			$(".somewhatMountain").fadeIn(250);
			$(".mountains").fadeOut(250);
		} else {
			$(".barren").fadeOut(250);
			$(".somewhatBarren").fadeOut(250);
			$(".somewhatMountain").fadeOut(250);
			$(".mountains").fadeIn(250);
		}
		});

	$("input#tempRange").on("change", function() {
		var warmOpacity = ($(this).val())/100;
		var coldOpacity = 1 - ($(this).val())/100;
		$(".warm").css("opacity", warmOpacity)
		$(".cold").css("opacity", coldOpacity)
		});

	$("input#creatureRange").on("change", function() {
		var amount = ($(this).val());

		if (amount == 0){
			$(".creatures1").fadeOut(250);
			$(".creatures2").fadeOut(250);
			$(".creatures3").fadeOut(250);
			$(".creatures4").fadeOut(250);
		}else if(amount == 1) {
			$(".creatures1").fadeIn(250);
			$(".creatures2").fadeOut(250);
			$(".creatures3").fadeOut(250);
			$(".creatures4").fadeOut(250);
		} else if (amount == 2) {
			$(".creatures1").fadeOut(250);
			$(".creatures2").fadeIn(250);
			$(".creatures3").fadeOut(250);
			$(".creatures4").fadeOut(250);
		} else if (amount == 3) {
			$(".creatures1").fadeOut(250);
			$(".creatures2").fadeOut(250);
			$(".creatures3").fadeIn(250);
			$(".creatures4").fadeOut(250);
		} else {
			$(".creatures1").fadeOut(250);
			$(".creatures2").fadeOut(250);
			$(".creatures3").fadeOut(250);
			$(".creatures4").fadeIn(250);
		}
		});

	$("input#humanRange").on("change", function() {
		var amount = ($(this).val());

		if (amount == 1){
			$(".humans1").fadeIn(250);
			$(".humans2").fadeOut(250);
			$(".humans3").fadeOut(250);
			$(".humans4").fadeOut(250);
			$(".humans5").fadeOut(250);
		}else if(amount == 2) {
			$(".humans1").fadeOut(250);
			$(".humans2").fadeIn(250);
			$(".humans3").fadeOut(250);
			$(".humans4").fadeOut(250);
			$(".humans5").fadeOut(250);
		} else if (amount == 3) {
			$(".humans1").fadeOut(250);
			$(".humans2").fadeOut(250);
			$(".humans3").fadeIn(250);
			$(".humans4").fadeOut(250);
			$(".humans5").fadeOut(250);
		} else if (amount == 4) {
			$(".humans1").fadeOut(250);
			$(".humans2").fadeOut(250);
			$(".humans3").fadeOut(250);
			$(".humans4").fadeIn(250);
			$(".humans5").fadeOut(250);
		} else {
			$(".humans1").fadeOut(250);
			$(".humans2").fadeOut(250);
			$(".humans3").fadeOut(250);
			$(".humans4").fadeOut(250);
			$(".humans5").fadeIn(250);
		}
		});


	// AUDIO AUTOPLAY & CONTROLS

	var source = "audio/bright.mp3";
	var audio = new Audio();
	var status = 1;
	audio.src = source;
	audio.load();
	audio.loop = true;

	$(".audioOnOff").click(function(){
			if (status == 1){
				audio.pause();
				$(".audioOnOffWhite").css("background-image", "url('images/musicOffWhite.png')");
				$(".audioOnOffBlack").css("background-image", "url('images/musicOff.png')");
				status=0;
			} else {
				audio.play();
				$(".audioOnOffWhite").css("background-image", "url('images/musicOnWhite.png')");
				$(".audioOnOffBlack").css("background-image", "url('images/musicOn.png')");
				status=1;
			}});


});
