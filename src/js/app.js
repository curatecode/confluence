$(window).load(function() {
	var winHeight =  $(window).height() * 0.7;
	$('.prime-box').css('height', winHeight);
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function() {
  var isFixed = $('#conf-quote').offset().top;
  var setPulse = $('#conf-program').offset().top;
  if ($(window).scrollTop() > ($('.main-header').height())) {
    $('.main-header').addClass('is-scrolled');
  }
  else {
    $('.main-header').removeClass('is-scrolled');
  };
  if ($(window).scrollTop() > isFixed) {
    $('.main-header').addClass('is-fixed');
    $('.main-header').removeClass('is-scrolled');
  }
  else {
    $('.main-header').removeClass('is-fixed');
  };
  if ($(window).scrollTop() > setPulse) {
    $('.head').each(function(i,el) {
      var $this = $(this);
      setTimeout(function() {
        $this.addClass('pulse');
      }, i*500);
    });
  };
});

// $(function() {
//   var boxOvrly = $('.box-overlay');
//   var pstlClrs = [
//   	'rgb(43, 173, 255)', 
//   	'rgb(255, 28, 69)', 
//   	'rgb(252, 246, 126)'
// 	];
// 	var i = 0;
// 	function pstlBg() {
// 	    boxOvrly.css({
// 	        'background-color': pstlClrs[current = ++i % pstlClrs.length],
// 	        'transition' : '5s ease-in-out'
// 	    });
// 	    setTimeout(pstlBg, 5000);
// 	 }
// 	 setTimeout(pstlBg, 1000);
// 	    boxOvrly.css({
// 	        'background' : pstlClrs[0]
//     });
//  });
