jQuery(function($){
	$(document).mouseup( function(e){
		var div = $( ".header .mob-contacts" );
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
			$('.header .links a.a1').removeClass('active');
			$('.header .mob-contacts').removeClass('opened');
		}
	});
});
jQuery(function($){
	$(document).mouseup( function(e){
		var div = $( ".header form" );
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
			$('.header .links a.a2').removeClass('active');
			$('.header form').removeClass('opened');
		}
	});
});
jQuery(function($){
	$(document).mouseup( function(e){
		var div = $( ".popup .window" );
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
			$('.popup').removeClass('opened');
		}
	});
});

$(function(){
	$('.job-page .item .text .link').bind("click", function(e){
	  var anchor = $(this);
	  $('html, body').stop().animate({
		 scrollTop: $(anchor.attr('href')).offset().top
	  }, 1000);
	  e.preventDefault();
	});
	$('.faq-page .form-block form .agree label').click(function() {
		$('.faq-page .form-block form button').toggleClass('disabled');
	});
	$('.discount-page .list .item a').click(function() {
		$('.popup.discount').addClass('opened');
	});
	$('.header .links a.a2').click(function() {
		$('.header .links a.a2').toggleClass('active');
		$('.header form').toggleClass('opened');
	});
	$('.top-page-line button, .footer .site-map button, .bottom-faq-block a').click(function() {
		$('.popup.form').addClass('opened');
	});
	$('.reviews-page .item').click(function() {
		$('.popup.review').addClass('opened');
	});
	$('.popup .window .close').click(function() {
		$('.popup').removeClass('opened');
	});
	$('.catalog-page2 .list .item .image .link a').click(function() {
		$('.popup.item').addClass('opened');
	});
	$('.catalog-page2 .tags-link a').click(function() {
		$(this).parent().hide();
		$('.catalog-page2 .page-tags').addClass('opened');
	});
	$('.catalog-page2 .mob-links a.a1').click(function() {
		$('.catalog-page2 .mob-links a.a1').toggleClass('active');
		$('.catalog-page2 .mob-links a.a2').removeClass('active');
		$('.catalog-page2 .filter').toggleClass('opened');
		$('.catalog-page2 .sort').removeClass('opened');
	});
	$('.catalog-page2 .mob-links a.a2').click(function() {
		$('.catalog-page2 .mob-links a.a1').removeClass('active');
		$('.catalog-page2 .mob-links a.a2').toggleClass('active');
		$('.catalog-page2 .filter').removeClass('opened');
		$('.catalog-page2 .sort').toggleClass('opened');
	});
	$('.catalog-page2 .filter .item .n').click(function() {
		$(this).parent().toggleClass('active');
	});
	$('.credit-page .item').click(function() {
		$(this).toggleClass('active');
		$(this).find('.info').slideToggle();
	});
	$('.faq-page .list .item .name').click(function() {
		$(this).toggleClass('active');
		$(this).parent().toggleClass('active');
		$(this).next('.text').slideToggle();
	});
	$('.faq-page .form-block .top-text button').click(function() {
		$(this).toggleClass('active');
		$('.faq-page .form-block form').slideToggle();
	});
	$('.header .links a.a1').click(function() {
		$('.header .links a.a1').toggleClass('active');
		$('.header .mob-contacts').toggleClass('opened');
	});
	$('.menubg').click(function() {
		$('.menubg').fadeOut();
		$('.mobile-menu').removeClass('opened');
		$('.header .links a.a3').removeClass('active');
	});
	$('.header .links a.a3').click(function() {
		$('.menubg').fadeIn();
		$('.mobile-menu').addClass('opened');
		$('.header .links a.a3').addClass('active');
	});
	$('.index-scheme-block .image .item .name').click(function() {
		$(this).toggleClass('active');
		$(this).next('.text').slideToggle();
	});
	$('.index-reviews .list').slick({
		dots: true
	});
	$('.index-docs-block .list').slick({
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	$('.index-reviews-block2 .list').slick({
	  dots: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        adaptiveHeight: true
	      }
	    }
	  ]
	});
	if ($(window).width() < 576) {
		$('.index-first-block .bottom-blocks').slick({
			centerMode: true
		});
	}
	if ($(window).width() < 576) {
		$('.index-catalog .list').slick({
			arrows: false,
			adaptiveHeight: true
		});
	}
	$('.index-credit-block .list').slick({
		arrows: false,
		adaptiveHeight: true,
		dots: true,
		variableWidth: true
	});
	$('.index-development-block .list').slick({
	});
	$('.slider-for .list').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for .list',
	  arrows: false,
	  vertical: true,
	  focusOnSelect: true,
	  responsive: [
	    {
	      breakpoint: 576,
	      settings: {
	        vertical: false
	      }
	    }
	  ]
	});
});