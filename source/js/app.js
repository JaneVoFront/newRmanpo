import { square, MyClass } from './module'
;(function () {
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
$(".close").on("click", function(){
 $('.close').closest('.show').removeClass('show');
});

/*---search_popup__show---*/
$(".search_icon").on("click", function(){
  $('div.search-info').find('div.search_popup').addClass('show');
});

/*---svg-inline-to-HTML---*/
$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});

/*---выпадающее меню по клику---*/
$(document).on("click", '.dropdown' , function(){
  $('.dropdown').find('ul').toggleClass("dropdown_open");
});
/*---выпадающее меню по клику---*/
$(document).on("click", '.dropdown_tab' , function(){
  $('.dropdown_tab').closest('ul').toggleClass("dropdown_open");
});

/*$('.dropdown').html('<div class="dropdown">'+$('.dropdown').html()+'</div>');*/

$(document).on('click' , function(e){
  if(!$(e.target).closest('body').length){
    $('.dropdown ul').removeClass("dropdown_open");
  }
});
/*---tabs для основного меню---*/
$('.tab_content').hide();
$('.tabs.animated-fade .tab-links .link_data a').on('click', function(e)  {
  var currentAttrValue = $(this).attr('href');

  // Show/Hide Tabs
  $('.custom_tab_content ' + currentAttrValue).show().addClass('show').siblings().hide().removeClass('show');

  // Change/remove current tab to active
  $(this).parent('li').addClass('active').siblings().removeClass('active');

  e.preventDefault();
});

/*2/*/
var $tabs = function (target) {
  var
      _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
      _eventTabsShow,
      _showTab = function (tabsLinkTarget) {
        var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
        tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
        tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
        tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
        // если следующая вкладка равна активной, то завершаем работу
        if (tabsLinkTarget === tabsLinkActive) {
          return;
        }
        // удаляем классы у текущих активных элементов
        if (tabsLinkActive !== null) {
          tabsLinkActive.classList.remove('tabs__link_active');
        }
        if (tabsPaneShow !== null) {
          tabsPaneShow.classList.remove('tabs__pane_show');
        }
        // добавляем классы к элементам (в завимости от выбранной вкладки)
        tabsLinkTarget.classList.add('tabs__link_active');
        tabsPaneTarget.classList.add('tabs__pane_show');
        document.dispatchEvent(_eventTabsShow);
      },
      _switchTabTo = function (tabsLinkIndex) {
        var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
        if (tabsLinks.length > 0) {
          if (tabsLinkIndex > tabsLinks.length) {
            tabsLinkIndex = tabsLinks.length;
          } else if (tabsLinkIndex < 1) {
            tabsLinkIndex = 1;
          }
          _showTab(tabsLinks[tabsLinkIndex - 1]);
        }
      };

  _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

  _elemTabs.addEventListener('click', function (e) {
    var tabsLinkTarget = e.target;
    // завершаем выполнение функции, если кликнули не по ссылке
    if (!tabsLinkTarget.classList.contains('tabs__link')) {
      return;
    }
    // отменяем стандартное действие
    e.preventDefault();
    _showTab(tabsLinkTarget);
  });

  return {
    showTab: function (target) {
      _showTab(target);
    },
    switchTabTo: function (index) {
      _switchTabTo(index);
    }
  }

};

$tabs('.tabs');