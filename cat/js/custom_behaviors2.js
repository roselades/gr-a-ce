$(document).ready(function() {

	$(window).resize(function() {

		var w = window.innerWidth;
		var h = window.innerHeight;

	if (h <= 650 || w <= 650){
		$(".tooSmall").css("display", "block");
	} else {
		$(".tooSmall").css("display", "none");
	}
})

/*DATA HANDLING*/

	//VARIABLES

var searchString = document.location.search;

var happiness = 0


	function yoWheresMyDataBro() {


    var name = getQueryParam("name", searchString);

		$("#destination").data('name', name);
		$("#destination").html("this is "+name+"! they can be controlled by the arrow keys.");
		$("#destination2").html(name);
		$("#destination3").html(name);
		$("#destination4").html(name);
		$("#destination5").html(name);
		$("#destination6").html(name);
		$("#destination7").html(name);

	};

	function getQueryParam(parameter, qs) {
		qs = "&" + qs.replace(/%20/gi, ' ' );
		var p = escape(unescape(parameter));
		var regex = new RegExp("[?&]" + p + "=(?:([^&]*))?", "i");
		var match = regex.exec(qs);
		var value = "";
		if (match != null) {
			value = match[1];
		};
		return value;
	};


//INITIALIZATION
	yoWheresMyDataBro();


	$(document).keydown(function(event){
			switch(event.which) {
    	case 37:
    	$(".resting").fadeOut(150)
			$(".walkingLeft").fadeIn(150)
			$(".cat").animate({left: "-=20"}, 0)
    	break;

    	case 38:
			$(".resting").fadeOut(150)
			$(".standing").fadeIn(150)

    	break;

    	case 39:
			$(".resting").fadeOut(150)
			$(".walkingRight").fadeIn(150)
			$(".cat").animate({left: "+=20"}, 0)
    	break;

    	case 40:
			$(".resting").fadeOut(150)
			$(".stretching").fadeIn(150)
    	break;

    	default: return;
}
event.preventDefault();

});

	$(document).keyup(function(event){

		$(".walkingLeft").fadeOut(150);
		$(".walkingRight").fadeOut(150);
		$(".standing").fadeOut(150);
		$(".stretching").fadeOut(150);
		$(".resting").fadeIn(150);

	})


	//BUTTON FUNCTIONS

	$(".okay").on("click", function(event){
		event.preventDefault();

		$(".introBox").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question1").animate({top: "10px"}, 750);
	})

	$(".kibble").on("click", function(event){
		event.preventDefault();

		happiness++;
		$(".question1").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question2").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "+=3%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".fancyFeast").on("click", function(event){
		event.preventDefault();

		happiness =+ 2;
		$(".question1").animate({top: "-1500px"}, 3000);
		$(".question2").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "+=6%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".gourmet").on("click", function(event){
		event.preventDefault();

		happiness=+ 3;
		$(".question1").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question2").animate({top: "10px"}, 750);
		console.log(happiness);
		$(".marker").animate({left: "+=9%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".shoo").on("click", function(event){
		event.preventDefault();

		happiness =+ -2;
		$(".question2").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question3").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "-=6%"}, 0)

		$(".sad").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".pet").on("click", function(event){
		event.preventDefault();

		happiness =+ 1;
		$(".question2").animate({top: "-1500px"}, 3000);
		$(".question3").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "+=3%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".cuddle").on("click", function(event){
		event.preventDefault();

		happiness =+ 2;
		$(".question2").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question3").animate({top: "10px"}, 750);
		console.log(happiness);
		$(".marker").animate({left: "+=6%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".dirty").on("click", function(event){
		event.preventDefault();

		happiness =+ -1;
		$(".question3").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question41").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "-=3%"}, 0)

		$(".sad").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".clean").on("click", function(event){
		event.preventDefault();

		happiness =+ 1;
		$(".question3").animate({top: "-1500px"}, 3000);
		$(".question41").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "+=3%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".new").on("click", function(event){
		event.preventDefault();

		happiness =+ 0;
		$(".question3").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question42").animate({top: "10px"}, 750);
		console.log(happiness);

	})

	$(".no").on("click", function(event){
		event.preventDefault();

		happiness =+ -1;
		$(".question41").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question52").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "-=3%"}, 0)

		$(".sad").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".cute").on("click", function(event){
		event.preventDefault();

		happiness =+ 1;
		$(".question41").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question52").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "+=3%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".stayHome").on("click", function(event){
		event.preventDefault();

		happiness =+ 2;
		$(".question41").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question51").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "+=6%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".no2").on("click", function(event){
		event.preventDefault();

		happiness =+ -1;
		$(".question42").animate({top: "-1500px"}, 3000);
		$(".question52").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "-=6%"}, 0)

		$(".sad").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".cute2").on("click", function(event){
		event.preventDefault();

		happiness =+ 1;
		$(".question42").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question52").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "+=3%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".stayHome2").on("click", function(event){
		event.preventDefault();

		happiness =+ 2;
		$(".question42").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question51").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "+=6%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".mine").on("click", function(event){
		event.preventDefault();

		happiness =+ -1;
		/*$(this).parents("div").fadeOut(500);*/
		$(".question51").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question52").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question6").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "-=3%"}, 0)

		$(".sad").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".taste").on("click", function(event){
		event.preventDefault();

		happiness ++;

		$(".question51").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question52").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".question6").animate({top: "10px"}, 750);

		console.log(happiness);

		$(".marker").animate({left: "+=3%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".eat").on("click", function(event){
		event.preventDefault();

		happiness =+ 2;
		$(".question51").animate({top: "-1500px"}, 3000);
		$(".question52").animate({top: "-1500px"}, 3000);
		$(".question6").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "+=6%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".other").on("click", function(event){
		event.preventDefault();

		happiness =+ -1;
		$(".question6").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".final").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "-=6%"}, 0)

		$(".sad").fadeIn(250).delay(1000).fadeOut(250);
	})

	$(".room").on("click", function(event){
		event.preventDefault();

		happiness ++;
		$(".question6").animate({top: "-1500px", left: "+=100px"}, 3000);
		$(".final").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "+=3%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	$(".bed").on("click", function(event){
		event.preventDefault();

		happiness =+ 2;
		$(".question6").animate({top: "-1500px"}, 3000);
		$(".final").animate({top: "10px"}, 750);
		console.log(happiness);

		$(".marker").animate({left: "+=6%"}, 0)

		$(".hearts").fadeIn(250).delay(1000).fadeOut(250);

	})

	var name = $("#destination").data("name")

	$(".go").on("click", function(event){

		if(happiness <= -1) {
			window.location = "page4.html?name="+name+"&cat=white";
		} else if (0 <= happiness <= 3) {
			window.location = "page5.html?name="+name+"&cat=white";
		}


	})


	});
