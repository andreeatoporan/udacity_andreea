// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//set max values for the width & heigh 

//in CONST HEIGHT_OBJECT we keep reference to our height object from the page

//in CONST WIDTH_OBJECT we keep reference to our width object from the page

//in CONST TABLE_CANVAS we keep reference to our canvas

const HEIGHT_OBJECT = $("#inputHeight");
const WIDTH_OBJECT  = $("#inputWeight");
const TABLE_CANVAS = $("#pixelCanvas");
//once we have the reference, we would need to set min and max values

HEIGHT_OBJECT.attr("max","50");
WIDTH_OBJECT.attr("max","50");

//on submit form action -> we need to empty the table, get the selected values and call the make grid function
$('form').on("submit", function(event) 
{

	event.preventDefault();

	emptyCanvas();

	let selected_height = HEIGHT_OBJECT.val();
	let selected_width = WIDTH_OBJECT.val();

    makeGrid(selected_height, selected_width);

});

function makeGrid(height, width) 
{
	for (let i = 0; i<width; i++)
	{
		TABLE_CANVAS.append("<tr></tr>");

		for (var j = 0; j < height; j++) {
			TABLE_CANVAS.children().last().append('<td></td>');  
		}
	}

	$('tr').children().on('click', drawColor);

	//we need to draw the table
}

function drawColor()
{
	let selectedcolor = $("#colorPicker").val();
	$(this).css('background', selectedcolor);
}

$('#btnClear').on("click", emptyCanvas);


function emptyCanvas()
{
	TABLE_CANVAS.empty();
}




