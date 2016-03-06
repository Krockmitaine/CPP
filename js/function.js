$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.pattern__cover__logo').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ wScroll /48 +'%)'
  });

  if (wScroll > $('.clotures--modeles').offset().top - ($(window).height() / 1.2)) {

    $('.clotures--modeles figure').each(function(i){

      setTimeout(function(){
        $('.clotures--modeles figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));

    });

  }

});
