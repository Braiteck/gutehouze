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
/*
jQuery(function($){
	$(document).mouseup( function(e){
		var div = $( ".popup .window" );
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
			$('.popup').removeClass('opened');
		}
	});
});
*/

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
	/*$('.top-page-line button, .footer .site-map button, .bottom-faq-block a').click(function() {
		$('.popup.form').addClass('opened');
	});*/
	/*$('.reviews-page .item').click(function() {
		$('.popup.review').addClass('opened');
	});*/
	/*$('.popup .window .close').click(function() {
		$('.popup').removeClass('opened');
	});*/
	/*$('.catalog-page2 .list .item .image .link a').click(function() {
		$('.popup.item').addClass('opened');
	});*/
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
		let active = $(this).hasClass('active');
		$('.index-scheme-block .image .item .name').each(function(){
			$(this).removeClass('active');
			$(this).next('.text').slideUp();
		});

		if(!active){
			$(this).addClass('active');
			$(this).next('.text').slideDown();
		}else{
			$(this).removeClass('active');
		}

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

});

if($('.ui-slider-handle').length){
	$('.ui-slider-handle').each(function(index){
		var step = $(this).data('step');
		var max = $(this).data('max');
		$( function() {
			console.log("#custom-handle"+(index+1));
			var idx = index+1;
			var handleSelector = "#custom-handle"+idx;
			var sliderSelector = "#slider"+idx;
			var inputSelector = "#sl"+idx;
			var handle = $( handleSelector );
			$( sliderSelector ).slider({
				step: step,
				min: 0,
				max: max,
				create: function() {
					handle.text( $( this ).slider( "value" ) );
				},
				slide: function( event, ui ) {
					handle.text( ui.value );
					$(inputSelector).val(ui.value);
				}
			});
			$(inputSelector).val($(sliderSelector).slider("value"));
		} );
	});
}


$('#recallFormModal').on('show.bs.modal', function (e){
	if($(e.relatedTarget).data('title')){
		$(e.target).find('.name').text($(e.relatedTarget).data('title'));
		if($(e.target).find('[name="gift"]').length){
			$(e.target).find('[name="gift"]').val($(e.relatedTarget).data('title'));
		}
	}
});


document.querySelectorAll('.js-product-preview').forEach(el => {
	el.addEventListener('click', getProductPreview);
});

function getProductPreview(e){
	e.preventDefault();
	let params = new FormData(),
		targetSelector = e.target.getAttribute('href'),
		targetWindow = document.querySelector(targetSelector),
		targetBlock = targetWindow.querySelector('.popup-item');
	params.append('id', e.target.dataset.id);
	params.append('action', 'get_product');
	sendAjax('assets/project_files/actions.php', params, (response) => {
		//console.log(response);
		if(response.success && response.html){
			targetBlock.innerHTML = response.html;
			$('#productModal').modal('show');
			setTimeout(function(){
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
			},150);

		}
	}, 'post', 'json');

}

$('#orderFormModal').on('show.bs.modal', function (e){
	if($(e.relatedTarget).data('title')){
		$(e.target).find('.product_name').text($(e.relatedTarget).data('title'));
		if($(e.target).find('[name="product"]').length){
			$(e.target).find('[name="product"]').val($(e.relatedTarget).data('title'));
		}
	}
});

/* вставляем защитный ключ */
let antiSpamKey = document.querySelectorAll('input[name="secret"]');
if (antiSpamKey.length) {
	for (let k = 0; k < antiSpamKey.length; k++) {
		antiSpamKey[k].value = antiSpamKey[k].dataset.secret;
	}
}
/* вставляем защитный ключ */

document.addEventListener('af_complete', e => {
	//console.log(e.detail.response);
	let currentModalEl = e.detail.form.closest('.modal'),
		thanksModalEl = document.querySelector('#thanksModal');
	if(e.detail.status){
		if(currentModalEl){
			$('#success-msg').text(e.detail.response.message);
			$(currentModalEl).modal('hide');
			$(thanksModalEl).modal('show');
			setTimeout(function(){
				$(thanksModalEl).modal('hide');
			},3000);
		}
		e.detail.response.message = '';
	}
});

//функция отправки ajax
function sendAjax(url, params, callback, method, type) {
	const request = new XMLHttpRequest();
	url = url || document.location.href;
	method = method || 'POST';
	request.open(method, url, true);
	request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	request.responseType = type || 'json';
	request.addEventListener('readystatechange', function () {
		if (request.readyState === 4 && request.status === 200) {
			callback(request.response);
		}
	});
	request.send(params);
}

setTimeout(function(){
	let shareTitles = document.querySelectorAll('.ya-share2__link_more .ya-share2__title');
	if(shareTitles.length){
		shareTitles.forEach(el => {
			el.innerText = 'Рассказать в соцетях';
		});
	}
},500);

$(document).on('mse2_load', function(e, data) {
	document.querySelectorAll('.js-product-preview').forEach(el => {
		el.addEventListener('click', getProductPreview);
	});
});



$(window).on('load', () => {
	// Masonry
	let Masonry = $('.masonry'),
		MasonryGutter = parseInt(Masonry.css('--masonry_gutter'))

	Masonry.masonry({
		percentPosition: true,
		gutter: MasonryGutter,
		itemSelector: '.masonry_item',
		columnWidth: Masonry.find('.item').width()
	})
})