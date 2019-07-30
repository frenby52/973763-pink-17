var page_header = document.querySelector('.page-header');
var main_nav = document.querySelector('.page-header__main-nav');
var site_menu = document.querySelector('.site-menu');
var menu_toggle = document.querySelector('.page-header__toggle');

page_header.classList.remove('page-header--no-js');
site_menu.classList.remove('site-menu--no-js');
main_nav.classList.remove('page-header__main-nav--opened');
site_menu.classList.remove('site-menu--opened');
main_nav.classList.add('page-header__main-nav--closed');
site_menu.classList.add('site-menu--closed');

menu_toggle.addEventListener('click', function() {
  if (main_nav.classList.contains('page-header__main-nav--closed')) {
    main_nav.classList.remove('page-header__main-nav--closed');
    site_menu.classList.remove('site-menu--closed');
    main_nav.classList.add('page-header__main-nav--opened');
    site_menu.classList.add('site-menu--opened');
  }
  else {
    main_nav.classList.remove('page-header__main-nav--opened');
    site_menu.classList.remove('site-menu--opened');
    main_nav.classList.add('page-header__main-nav--closed');
    site_menu.classList.add('site-menu--closed');
  }
});
