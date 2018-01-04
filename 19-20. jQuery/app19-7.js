/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val;
    val = $(this).val();
    $(this).siblings().first().text(val);
	
	//or
	val = $('#input').val();
	$('.articles').children('h1').text(val);
	
	//or
	val = $('#input');
	val.siblings('h1').text(val.val());
});

//more fun
$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $('.articles').children('h1').text( value );
  })
  .keyup();
  