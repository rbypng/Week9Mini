
var circle = $(".circle");

$(document).mousemove(function( event ) {
  var pageX = event.pageX;
  var pageY = event.pageY;
  console.log(pageX + " , " + pageY);
  $(".circle").css({
   "left": pageX + "px",
   "top": pageY + "px"
  })
});