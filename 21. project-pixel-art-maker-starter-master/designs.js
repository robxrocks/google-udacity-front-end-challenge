// Select color input
var color = '#000';
$('#colorPicker').change(function() {
	color = $(this).val();
});

// Select size input
	$( "#sizePicker" ).submit(function(evt) {
		var gridHeight, gridWidth;
		
		evt.preventDefault();
		
		gridHeight = $('#input_height').val();
		gridWidth = $('#input_width').val();
		makeGrid(gridHeight, gridWidth);
	});

function makeGrid(height, width) {
	var oldCanvas = $('#pixel_canvas');
	oldCanvas.remove();
	
	$('h2').last().append('<table id="pixel_canvas"></table>');
	var newCanvas = $('#pixel_canvas');
	for (var row = 0; row < height; row++){
		newCanvas.append("<tr></tr>");
		var currentRow = $('tr').last();
		
		for (var col = 0; col < width; col++) {
			currentRow.append("<td></td>");
			var currentCell = $('td').last();
			
			currentCell.on( "click", function() {
				$(this).attr( 'bgcolor', color);
			});
		}
	}
}

