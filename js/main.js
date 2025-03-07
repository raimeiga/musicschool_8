$(function (){
  $('.c-hamburger').click(function(){
    $(this).toggleClass('active')
    $('.l-header-nav__lists').toggleClass('active')
  })
  $('.l-header-nav__list a').click(function(){
    $('.c-hamburger ').removeClass('active')
    $('.l-header-nav__lists').removeClass('active')
  })
})