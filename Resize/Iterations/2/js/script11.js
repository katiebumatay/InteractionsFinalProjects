
function loadGif() {
	var gifNum = Math.floor(Math.random() * 18) + 1;
	var gifClass = "gif" + gifNum

	$(".box").addClass(gifClass);
	// $(".box").addClass("gif18");

};

var IDname;
var element;
var theWidth = 600;
var theHeight = 600;

function resizeMe() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	if ((w == theWidth) && (h == theHeight)) {
		console.log("window size did not change");
	}
	else{
		if (w>=h) {
			console.log("width >= height");
			for (var i = 1; i <= 850; i++) {
				IDname = "box" + i;
				element = document.getElementById(IDname);
				console.log(IDname);
				element.classList.remove("box2");
   				element.classList.add("box");
			}
		}
		else if (w<h) {
			console.log("width < height")
			for (var i = 1; i <= 850; i++) {
				IDname = "box" + i;
				element = document.getElementById(IDname);
				console.log(IDname);
				element.classList.remove("box");
   				element.classList.add("box2");
			}
		}
	}
	theWidth = w;
	theHeight = h;
	setTimeout(resizeMe, 200); 
}



$(document).ready(function() {

	loadGif();
	resizeMe();

	// $.fn.resizeMe = function() {
	// 	var w = window.innerWidth;
	// 	var h = window.innerHeight;
	// 	if (w>=h) {
	// 		console.log("width >= height");
	// 		for (var i = 1; i <= 1024; i++) {
	// 			$(this).removeClass("box2");
	// 			$(this).addClass("box");
	// 		}
	// 	}
	// 	else if (w<h) {
	// 		console.log("width < height")
	// 		for (var i = 1; i <= 1024; i++) {
	// 			$(this).removeClass("box");
	// 			$(this).addClass("box2");
	// 		}
	// 	}
	// }

	// $('.box').resizeMe();

	// showBox();

	$('#bottomA').mouseover(function(){
		$('#bottom').animate({opacity:"0.5",}, 200);
	});

	$('#bottomA').mouseout(function(){
		$('#bottom').animate({opacity:"0",}, 200);
	});

	$('#leftA').mouseover(function(){
		$('#left').animate({opacity:"0.5",}, 200);
	});

	$('#leftA').mouseout(function(){
		$('#left').animate({opacity:"0",}, 200);
	});

	$('#rightA').mouseover(function(){
		$('#right').animate({opacity:"0.5",}, 200);
	});

	$('#rightA').mouseout(function(){
		$('#right').animate({opacity:"0",}, 200);
	});



 	var effect;
 	var effectClass;

    $('.box').mouseenter(function(){
    	effect = Math.floor(Math.random() * 3) + 1;
    	effectClass = "effect" + effect
    	// $(this).showBox();
        $(this).toggleClass(effectClass);
        // $(this).toggleClass("effect1");
        console.log(effectClass);
    });

    $('.box2').mouseenter(function(){
    	effect = Math.floor(Math.random() * 3) + 1;
    	effectClass = "effect" + effect
    	// $(this).showBox();
        $(this).toggleClass(effectClass);
        // $(this).toggleClass("effect1");
        console.log(effectClass);
    });

   	$('#reloadApproach').mouseover(function(){
		$('#triangle-bottomright').animate({opacity:"0.5",}, 200);
	});

	$('#reloadApproach').mouseout(function(){
		$('#triangle-bottomright').animate({opacity:"0",}, 200);
	});

    $('#triangle-bottomright').click(function(){
    	location.reload(true);
    	console.log("relaod");
    });


});







