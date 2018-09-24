jQuery(function($){
  "use strict";

  var PIX = window.PIX || {};


  /*=======================================
                main function
  =======================================*/

  PIX.mainFunction = function(){

    /******** loading ********/
    setTimeout(function(){
      $(".wrapper-loading").hide();
    },4000)

    /******** menu mobile ********/

    $(".wrapper-hamburger").on("click", function(e){
      $(".body-wrapper").toggleClass("show-menu");
      e.stopPropagation();
    })

    $(".wrapper-menu-mobile").on("click", function(e){
      e.stopPropagation();
    })

    $("body").on("click", function(){
      $(".body-wrapper").removeClass("show-menu");
    })

    /******** back to top ********/
    $("#back-top .link").on('click', function(){
      $('body,html').animate({
        scrollTop: 0
      },900);
      return false;
    });

    var tmp = $(window).height();

    $(window).on('scroll load', function(){
      if($(window).scrollTop() > tmp){
        $('#back-top .link').addClass('show-btn');
      } else {
        $('#back-top .link').removeClass('show-btn');
      }
    })
    /******** home silder banner ********/
    $('.home-slider-banner').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay : true,
      autoplaySpeed: 4000
    })

    /******** wow ********/
    new WOW().init();

    /******** home silder product ********/
    $('.content-slider-product').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    })

    /******** isotope ********/

    $('.gallery-image-grid').isotope({
      layoutMode: 'masonry',
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
          columnWidth: '.grid-item'
      }
    })

    $('.gallery-image-grid .grid-item .wrapper-gallery-images').directionalHover({
      speed: 200
    });

    /******** menu fixded ********/
    if($(window).width() > 768){
      var window_height = $(window).height();
      // Add class fixed for menu when scroll
      $(window).on('scroll load', function(event){
        if($(window).scrollTop() > 0){
          $('header .wrapper-header').addClass('wrapper-header-fix');
        }
        else {
          $('header .wrapper-header').removeClass('wrapper-header-fix');
        }
      })
    }
  };

  /*=======================================
              end main function
  =======================================*/


  /*=======================================
               header & footer
  =======================================*/
  PIX.headerFunction = function() {

    /******** MENU ACTIVE ********/
    $('.menu-wrapper .menu-item').on('click', function(){
      $('.menu-wrapper .menu-item').removeClass('active');
      $(this).addClass('active');
    });

  };

  /*=======================================
             end header & footer
  =======================================*/



  /*======================================
               init functions
  ======================================*/

  $(document).ready(function(){
    PIX.headerFunction();
    PIX.mainFunction();
  });

  /*======================================
             end init functions
  ======================================*/

});
