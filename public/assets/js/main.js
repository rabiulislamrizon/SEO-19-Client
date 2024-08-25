(function ($) {
	"use strict";

	$(window).on('load', function () {
		preloader();
		aosAnimation();
	});

	/*------------------------------------------
	= preloader
	-------------------------------------------*/
	function preloader() {
		$('#xb-loadding').fadeOut('slow', function () { $(this).remove(); });
	};

	/*------------------------------------------
	= back to top
	-------------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.xb-backtotop').addClass('active');
		} else {
			$('.xb-backtotop').removeClass('active');
		}
	});
	$(function () {
		$(".scroll").on('click', function () {
			$("html,body").animate({ scrollTop: 0 }, "slow");
			return false
		});
	});

	/*------------------------------------------
	= sticky header
	-------------------------------------------*/
	function stickyHeader() {
		var scrollDirection = "";
		var lastScrollPosition = 0;

		// Clone and make header sticky if the element with class 'xb-header' exists
		if ($('.xb-header').length) {
			$('.xb-header').addClass('original').clone(true).insertAfter('.xb-header').addClass('xb-header-area-sticky xb-sticky-stt').removeClass('original');
		}

		// Handle scroll events
		$(window).on("scroll", function () {
			var currentScrollPosition = $(window).scrollTop();

			// Determine scroll direction
			scrollDirection = currentScrollPosition < lastScrollPosition ? "up" : "down";
			lastScrollPosition = currentScrollPosition;

			// Check if element with ID 'xb-header-area' has class 'is-sticky'
			if ($("#xb-header-area").hasClass("is-sticky")) {
				// Add or remove classes based on scroll position for sticky header and mobile header
				if (lastScrollPosition > 100) {
					$(".xb-header-area-sticky.xb-sticky-stb").addClass("xb-header-fixed");
				} else {
					$(".xb-header-area-sticky.xb-sticky-stb").removeClass("xb-header-fixed");
				}

				// Add or remove classes for sticky header based on scroll direction
				if (scrollDirection === "up" && lastScrollPosition > 100) {
					$(".xb-header-area-sticky.xb-sticky-stt").addClass("xb-header-fixed");
				} else {
					$(".xb-header-area-sticky.xb-sticky-stt").removeClass("xb-header-fixed");
				}
			}
		});
	}
	stickyHeader();

	/*------------------------------------------
	= header search
	-------------------------------------------*/
	$(".header-search-btn").on("click", function (e) {
		e.preventDefault();
		$(".header-search-form-wrapper").addClass("open");
		$('.header-search-form-wrapper input[type="search"]').focus();
		$('.body-overlay').addClass('active');
	});
	$(".xb-search-close").on("click", function (e) {
		e.preventDefault();
		$(".header-search-form-wrapper").removeClass("open");
		$("body").removeClass("active");
		$('.body-overlay').removeClass('active');
	});

	/*------------------------------------------
	= sidebar
	-------------------------------------------*/
	$('.sidebar-menu-close, .body-overlay').on('click', function () {
		$('.offcanvas-sidebar').removeClass('active');
		$('.body-overlay').removeClass('active');
	});

	$('.offcanvas-sidebar-btn').on('click', function () {
		$('.offcanvas-sidebar').addClass('active');
		$('.body-overlay').addClass('active');
	});
	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".header-search-form-wrapper").removeClass("open");
	});

	/*------------------------------------------
	= mobile menu
	-------------------------------------------*/
	$('.xb-nav-hidden li.menu-item-has-children > a').append('<span class="xb-menu-toggle"></span>');
	$('.xb-header-menu li.menu-item-has-children, .xb-menu-primary li.menu-item-has-children').append('<span class="xb-menu-toggle"></span>');
	$('.xb-menu-toggle').on('click', function () {
		if (!$(this).hasClass('active')) {
			$(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
			$(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
		}
		$(this).toggleClass('active');
		$(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
		$(this).closest('.menu-item').find('> .sub-menu').slideToggle();
	});

	$('.xb-nav-hidden li.menu-item-has-children > a').click(function (e) {
		var target = $(e.target);
		if ($(this).attr('href') === '#' && !(target.is('.xb-menu-toggle'))) {
			e.stopPropagation();
			if (!$(this).find('.xb-menu-toggle').hasClass('active')) {
				$(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
				$(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
			}
			$(this).find('.xb-menu-toggle').toggleClass('active');
			$(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
			$(this).closest('.menu-item').find('> .sub-menu').slideToggle();
		}
	});
	$(".xb-nav-mobile").on('click', function () {
		$(this).toggleClass('active');
		$('.xb-header-menu').toggleClass('active');
	});

	$(".xb-menu-close, .xb-header-menu-backdrop").on('click', function () {
		$(this).removeClass('active');
		$('.xb-header-menu').removeClass('active');
	});

	/*------------------------------------------
	= data background and bg color
	-------------------------------------------*/
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ") ")
	})
	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));

	});

	/*------------------------------------------
	= aos animation
	-------------------------------------------*/
	function aosAnimation() {
		AOS.init({
			once: true,
		});
	}

	/*------------------------------------------
	= counter
	-------------------------------------------*/
	if ($(".xbo").length) {
		$('.xbo').appear();
		$(document.body).on('appear', '.xbo', function (e) {
			var odo = $(".xbo");
			odo.each(function () {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
			window.xboOptions = {
				format: 'd',
			};
		});
	}

	/*------------------------------------------
	= isotop
	-------------------------------------------*/
	$('.grid').imagesLoaded(function () {
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});

		// filter items on button click
		$('.portfolio-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	/*------------------------------------------
	= testimonial slider
	-------------------------------------------*/
	var insTestimonialSlider = new Swiper(".ins-testimonial-nav-slider", {
		loop: true,
		spaceBetween: 20,
		speed: 500,
		slidesPerView: 3,
		centeredSlides: true,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
				centeredSlides: false,
			},
			'0': {
				slidesPerView: 2,
				centeredSlides: false,
			},
		},
	});
	var swiper2 = new Swiper(".ins-testimonial-slider-for", {
		loop: true,
		spaceBetween: 0,
		effect: 'fade',
		autoplay: {
			enabled: true,
			delay: 6000
		},
		slidesPerView: 1,
		thumbs: {
			swiper: insTestimonialSlider,
		},
	});

	/*------------------------------------------
	= brand slider
	-------------------------------------------*/
	var slider = new Swiper('.ins-brand-slider', {
		slidesPerView: 6,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 6,
			},
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	});

	/*------------------------------------------
	= law project slider
	-------------------------------------------*/
	var lwProjectSlider = new Swiper(".lw-project-slider", {
		loop: true,
		spaceBetween: 20,
		speed: 500,
		slidesPerView: 1,
		effect: 'fade',
		centeredSlides: true,
		navigation: {
			nextEl: '.xb-swiper-arrow-next',
			prevEl: '.xb-swiper-arrow-prev',
		},
		autoplay: {
			enabled: true,
			delay: 6000
		},
	});
	var swiper2 = new Swiper(".lw-project-slider-for", {
		loop: true,
		spaceBetween: 0,
		speed: 700,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		slidesPerView: 1,
		navigation: {
			nextEl: '.xb-swiper-arrow-next',
			prevEl: '.xb-swiper-arrow-prev',
		},
		thumbs: {
			swiper: lwProjectSlider,
		},
	});


	/*------------------------------------------
	= law testimonial slider
	-------------------------------------------*/
	var slider = new Swiper('.lw-testimonial-slider', {
		spaceBetween: 30,
		slidesPerView: 3,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		watchSlidesVisibility: true,
		slideVisibleClass: 'swiper-slide-visible',
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	/*------------------------------------------
	= team slider
	-------------------------------------------*/
	var slider = new Swiper('.xb-team-sldier', {
		spaceBetween: 12,
		slidesPerView: 3,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		watchSlidesVisibility: true,
		slideVisibleClass: 'swiper-slide-visible',
		autoplay: {
			enabled: true,
			delay: 8000
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true,
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	/*------------------------------------------
	= testimonial slider
	-------------------------------------------*/
	var slider = new Swiper('.xb-testimonial-sldier', {
		spaceBetween: 12,
		slidesPerView: 2,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		watchSlidesVisibility: true,
		slideVisibleClass: 'swiper-slide-visible',
		autoplay: {
			enabled: true,
			delay: 6000
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true,
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	/*------------------------------------------
	= testimonial slider
	-------------------------------------------*/
	var slider = new Swiper('.mr-testimonial-slider', {
		spaceBetween: 100,
		slidesPerView: 3,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		centeredSlides: true,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	/*------------------------------------------
	= blog slider
	-------------------------------------------*/
	var slider = new Swiper('.lw-blog-slider', {
		spaceBetween: 30,
		slidesPerView: 2,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	/*------------------------------------------
	= service slider
	-------------------------------------------*/
	var slider = new Swiper('.bc-service-slider', {
		spaceBetween: 10,
		slidesPerView: 4,
		roundLengths: true,
		loop: true,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		navigation: {
			nextEl: ".xb-swiper-arrow-next",
			prevEl: ".xb-swiper-arrow-prev",
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	/*------------------------------------------
	= testimonial slider
	-------------------------------------------*/
	var slider = new Swiper('.ad-testimonial-slider', {
		spaceBetween: 0,
		slidesPerView: 1,
		roundLengths: true,
		loop: true,
		centeredSlides: true,
		effect: 'fade',
		loopAdditionalSlides: 30,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		speed: 400,
	});

	/*------------------------------------------
	= inhover active
	-------------------------------------------*/
	$(".xb-mouseenter").on('mouseenter', function () {
		$(".xb-mouseenter").removeClass("active");
		$(this).addClass("active");
	});
	$(".xb-mouseenter2").on('mouseenter', function () {
		$(".xb-mouseenter2").removeClass("active");
		$(this).addClass("active");
	});

	/*------------------------------------------
	= nice slect
	-------------------------------------------*/
	$('.nice-select').niceSelect();

	/*------------------------------------------
	= magnificPopup
	-------------------------------------------*/
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	$('.popup-video').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-zoom-in',
	});

	/*------------------------------------------
	= Accordion Box
	-------------------------------------------*/
	if ($(".accordion_box").length) {
		$(".accordion_box").on("click", ".acc-btn", function () {
			var outerBox = $(this).parents(".accordion_box");
			var target = $(this).parents(".accordion");

			if ($(this).next(".acc_body").is(":visible")) {
				$(this).removeClass("active");
				$(this).next(".acc_body").slideUp(300);
				$(outerBox).children(".accordion").removeClass("active-block");
			} else {
				$(outerBox).find(".accordion .acc-btn").removeClass("active");
				$(this).addClass("active");
				$(outerBox).children(".accordion").removeClass("active-block");
				$(outerBox).find(".accordion").children(".acc_body").slideUp(300);
				target.addClass("active-block");
				$(this).next(".acc_body").slideDown(300);
			}
		});
	}

	/*------------------------------------------
	= banner paralax
	-------------------------------------------*/
	jQuery('.jarallax').jarallax({
		speed: 0.5,
	});


	/*------------------------------------------
	= scroll rotate
	-------------------------------------------*/
	let reloadClassName = document.getElementById("reload");
	if (reloadClassName !== null) {
		window.onscroll = function () {
			scrollRotate();
		};
		function scrollRotate() {
			reloadClassName.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
		}
	}

	/*------------------------------------------
	= marquee
	-------------------------------------------*/
	$('.marquee-left').marquee({
		speed: 50,
		gap: 0,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible: true,
	});
	$('.marquee-right').marquee({
		speed: 50,
		gap: 0,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: false,
		startVisible: true,
	});

	/*------------------------------------------
	= theiaStickySidebar
	-------------------------------------------*/
	if (typeof $.fn.theiaStickySidebar !== "undefined") {
		$(".sticky-coloum-wrap .sticky-coloum-item").theiaStickySidebar({
			additionalMarginTop: 130,
		});
	}

	/*------------------------------------------
	= parallax
	-------------------------------------------*/
	if ($('.scene,.scene_1,.scene_2,.scene_3,.scene_4,.scene_5').length > 0) {
		$('.scene,.scene_1,.scene_2,.scene_3,.scene_4,.scene_5').parallax({
			scalarX: 10.0,
			scalarY: 10.0,
		});
	}


	/*----------------------------
	= SHOP PRICE SLIDER
	------------------------------ */
	if ($("#slider-range").length) {
		$("#slider-range").slider({
			range: true,
			min: 12,
			max: 200,
			values: [0, 100],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});

		$("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
	}

	/*------------------------------------------
	= TOUCHSPIN FOR PRODUCT SINGLE PAGE
	-------------------------------------------*/
	if ($("input.product-count").length) {
		$("input.product-count").TouchSpin({
			min: 1,
			max: 1000,
			step: 1,
			buttondown_class: "btn btn-link",
			buttonup_class: "btn btn-link",
		});
	}

	/*------------------------------------------
	= woocommerce
	-------------------------------------------*/
	if ($(".checkout-section").length) {
		var showLogInBtn = $(".woocommerce-info > a");
		var showCouponBtn = $(".showcoupon");
		var shipDifferentAddressBtn = $("#ship-to-different-address");
		var loginForm = $("form.login");
		var couponForm = $(".checkout_coupon");
		var shippingAddress = $(".shipping_address");

		loginForm.hide();
		couponForm.hide();
		shippingAddress.hide();

		showLogInBtn.on("click", function (event) {
			event.preventDefault();
			loginForm.slideToggle();
			event.stopPropagation();
		});

		showCouponBtn.on("click", function (event2) {
			event2.preventDefault();
			couponForm.slideToggle();
			event2.stopPropagation();
		})

		shipDifferentAddressBtn.on("click", function (event3) {
			shippingAddress.slideToggle();
			event3.stopPropagation();
		})
	}


})(jQuery);



