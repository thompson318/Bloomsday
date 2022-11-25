$(document).ready(function() {
  try {
    $('body').ripples({
      resolution: 512,
      dropRadius: 10, //px
      perturbance: 0.10,
    });
    $('main').ripples({
      resolution: 256,
      dropRadius: 10, //px
      perturbance: 0.01,
      interactive: true 
    });
  }
  catch (e) {
    $('.error').show().text(e);
  }

  // Automatic drops
  setInterval(function() {
    var $el = $('body');
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 10;
    var strength = 0.0010 + Math.random() * 0.0010;

    $el.ripples('drop', x, y, dropRadius, strength);
  }, 400);

  // automatic with trajectory (meant to simulate a mouse drag
  setInterval(function() {
    var $el = $('body');
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 10;
    var strength = 0.0010 + Math.random() * 0.0010;
    for ( let my_x = x;  my_x < x+50; my_x ++){
	console.log('shooting' , my_x)
    	$el.ripples('drop', my_x, y, dropRadius, strength);
    }
  }, 400);

});

