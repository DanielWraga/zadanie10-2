$(function(){
	//this code will execute after the DOM is loaded
	var carouselList = $("#carousel ul");
	
	setInterval((changeSlide, 3000){
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	});

	moveFirstSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	};
});




