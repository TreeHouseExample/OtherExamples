// problem user when clicking on an image goes to the dead end
//create an overlay with the larger image - lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $('<p></p>')
$overlay.append($image);

$overlay.append($caption);
// add an overlay
$("body").append($overlay);
  // add an image 
  // add a caption

//$overlay.hide();

//1. Capture the click event on the image link
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  
  //1.2. update the overlay with the image linked in the link  
  $image.attr("src",imageLocation);
  
  //1.3. get child's alt in the atribute nd set caption
 
  //1.1. Show the overlay
  $overlay.show();
  
  var imageCaption = $(this).children("img").attr("alt");
  $caption.text(imageCaption);
  
});

//3. when overlay is clicked
  //3.1 hide the overlay
$overlay.click(function(){
  $(this).hide();
});