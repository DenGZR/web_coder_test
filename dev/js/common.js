$(document).ready(function() {

	var carousel = $(".users-list .carousel");
	var bannerSlider = $(".banner .slider");

	function validateName() {
		var regex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
		var ctrl =  $('#name').val()||0;

		if (regex.test(ctrl)) {
			console.log("name is ok")
			$('.my-name .tooltip').css({
				'display' : 'block',
				'background' : 'url("./img/inputvalid.png") no-repeat 0 -30px'
			});
		} else {
			console.log("name is error")
			$('.my-name .tooltip').css({
				'display': 'block',
				'background' : 'url("./img/inputvalid.png") no-repeat 0 0'
			});
		}
	};

	function validateAge(){
		var ctrl =  $('#year').val()||0;
		var today = new Date();
		var yr = today.getFullYear();

		var young = (yr - ctrl)<18;
		console.log(young);

		if(young) {
			$('.my-age .tooltip').css({
				'display': 'block',
				'background' : 'url("./img/inputvalid.png") no-repeat 0 0'
			});
		}else{
			$('.my-age .tooltip').css({
				'display' : 'block',
				'background' : 'url("./img/inputvalid.png") no-repeat 0 -30px'
			});
		}
	};

	bannerSlider.owlCarousel({
		autoHeight : true,
		singleItem : true,
		navigation: false,
		pagination : true
	});

	carousel.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1000,5], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,4], // betweem 900px and 601px
		itemsTablet: [600,3], //2 items between 600 and 0
		itemsMobile : false ,// itemsMobile disabled - inherit from itemsTablet option
		autoHeight : true,
		responsive: true,
		navigation: true,
		pagination : false,
		navigationText: [
			"<i class='icon-arrow-prev'></i>",
			"<i class='icon-arrow-next'></i>"
		]
	});

	$("#range-slider").slider({
		range: true,
		values: [ 17, 67 ]
	});


	//events

	$(document).on('click','.menu li', function(){
		if(!$(this).hasClass('active')){
			$('.menu li').removeClass('active');
			$(this).addClass('active');
		};
	});
	$(document).on('focus', '#name', function() {
		console.log("focus on name");
		$('.my-name .tooltip-mes').css({
			'display' : 'inline'
		})
	});
	$(document).on('blur', '#name', function() {
		console.log("blur on name")
		$('.my-name .tooltip-mes').css({
			'display' : 'none'
		});
		validateName();
	});
	$(document).on('blur', '#year', function() {
		console.log("blur on year");
		validateAge();
	});


});