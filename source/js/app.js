import {square, MyClass} from './module'
	;

(function () {
	'use strict'
	if (document.querySelector('.header__logo')) {
		setTimeout(function () {
			document.querySelector('.header__logo').classList.add('m--show')
		}, 1000)
	}
})()

console.log(square(5))
var cred = {
	name: 'Юрий Кучма!',
	enrollmentNo: 11115078,
}
var x = new MyClass(cred)
console.log(x.getName())

/*---кнопка закрытия блока---*/
$(".close").on("click", function () {
	$('.close').closest('.active').removeClass('active');
});
/*gen-menu_close*/
$(".close").on("click", function () {
	$('.close').siblings('.active').removeClass('active');
});

/*---search_popup__show---*/
$(".search_icon").on("click", function () {
	$('div.search-info').find('div.search__popup').addClass('active');
});
/*---info-sidebar__open-close---*/
$(".info_icon").on("click", function () {
	$('div.search-info')
		.find('div.info-sidebar')
		.addClass('info-sidebar_active')
		.siblings('.outer_close')
		.addClass('active');
});
$(".close").on("click", function () {
	$('.close')
		.closest('.info-sidebar_active')
		.removeClass('info-sidebar_active')
		.siblings('.outer_close')
		.removeClass('active');
});

/*---svg-inline-to-HTML---*/
$('img.img-svg').each(function () {
	var $img = $(this);
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');
	$.get(imgURL, function (data) {
		var $svg = $(data).find('svg');
		if (typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass + ' replaced-svg');
		}
		$svg = $svg.removeAttr('xmlns:a');
		if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
			$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
		}
		$img.replaceWith($svg);
	}, 'xml');
});

/*---выпадающее меню по клику---*/
$(document).on("click", '.dropdown', function () {
	$('.dropdown').find('ul').toggleClass("dropdown_open");
});

$(document).on('click', function (e) {
	if (!$(e.target).closest('body').length) {
		$('.dropdown ul').removeClass("dropdown_open");
	}
});

/*---выпадающее меню по клику---*/
(function ($) {
	$(function () {
		$("ul.tabs__nav").on("click", "li:not(.active)", function () {
			$(this)
				.addClass("active")
				.siblings()
				.removeClass("active")
				.closest("nav.tabs")
				.find("div.tab__pane")
				.removeClass("active")
				.eq($(this).index())
				.addClass("active")
				.closest("nav.tabs")
				.find("button.close")
				.addClass("active");
		});
		$("ul.tabs__nav").on("click", "li.active", function () {
			$(this)
				.removeClass("active")
				.closest("nav.tabs")
				.find("div.tab__pane")
				.eq($(this).index())
				.removeClass("active")
				.closest("nav.tabs")
				.find("button.close")
				.removeClass("active");

		})
	});
})(jQuery);

/*$('.dropdown').html('<div class="dropdown">'+$('.dropdown').html()+'</div>');*/


/*---tabs для основного меню---
$('.tab_content').hide();
$('.tabs.animated-fade .tab-links .link_data a').on('click', function(e)  {
  var currentAttrValue = $(this).attr('href');

  // Show/Hide Tabs
  $('.custom_tab_content ' + currentAttrValue).show().addClass('show').siblings().hide().removeClass('show');

  // Change/remove current tab to active
  $(this).parent('li').addClass('active').siblings().removeClass('active');

  e.preventDefault();
});*/
