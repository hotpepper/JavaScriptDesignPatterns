
//set default value
var clicks = 0;

$('.cat_image').click(function() {
  clicks++
  console.log(clicks)
  $(".label").text("Clicks: "+clicks);
  //alert( "Handler for .click() called." );
});

