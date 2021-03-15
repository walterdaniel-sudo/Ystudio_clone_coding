'use strict'
$(document).on('click', 'a[herf="#"]', function(e){
    e.preventDefault();
});

//gnb메뉴
$(function(){
    $('header .menuOpen').on('click', function(){
        $('.gnb').addClass('on');
    });
    $('.gnb .close, section').on('click', function(){
        $('.gnb').removeClass('on');
    });
});