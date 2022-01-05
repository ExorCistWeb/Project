$(window).scroll(function(e) {
    if($(window).scrollTop()>=200) {
      $('div.burger-menu').fadeIn(200);
    } else {
      $('div.burger-menu').fadeOut(200);
    }
 });
