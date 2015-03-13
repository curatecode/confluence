$(window).load(function() {
	var winHeight =  $(window).height() - 80;
	$('.prime-box').css('height', winHeight);
});

$(function() {
  var boxOvrly = $('.box-overlay');
  var pstlClrs = [
  	'rgb(43, 173, 255)', 
  	'rgb(255, 28, 69)', 
  	'rgb(252, 246, 126)'
	];
	var i = 0;
	function pstlBg() {
	    boxOvrly.css({
	        'background-color': pstlClrs[current = ++i % pstlClrs.length],
	        'transition' : '5s ease-in-out'
	    });
	    setTimeout(pstlBg, 5000);
	 }
	 setTimeout(pstlBg, 1000);
	    boxOvrly.css({
	        'background' : pstlClrs[0]
    });
 });
