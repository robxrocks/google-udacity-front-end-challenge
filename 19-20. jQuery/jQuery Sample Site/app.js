/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!

*/
/* $(function() {
	var articleItem;
	var newImage = $("<img src='http://placekitten.com/350/150' alt='Kitten Image'>");
	
	articleItem = $('.article-list').children('.article-item').first();
	articleItem.children('img').remove();
	newImage.insertAfter(articleItem.children('h3'));
}) */


//or
$(function() {
  $('img').attr('src', 'http://lorempixel.com/350/150/animals/');
  $('img').attr('alt', 'Lorem Pixel Image');
  
  $( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $('.articles').children('h1').text( value );
  })
  .keyup();
})
