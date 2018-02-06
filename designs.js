// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//Code to draw pixel art on a customizable canvas

//1st step: defining variables
//.ready() method to make sure the DOM is ready before the jQuery code executes
$(document).ready(function() {
  let designCanvas=$('#pixel_canvas');
  let table=$('table');
  let color=$('input[type="color"]');

//create a table, set the size of the cross stitch canvas
function makeGrid(height, width) {
   let Height=$('#input_height').val();
	 let Width=$('#input_width').val();
	  table.html('');
    table.css('background-color','lightgrey');


//design customizable canvas - height to extend cells, width to extend rows
	for (let h=1; h<=Height ;h++){
    designCanvas.append
      ('<tr><td></td></tr>');
    }
  for (let w=1; w<Width ;w++){
      $('tr').append
      ('<td></td>');
  }
  $('td').dblclick(function(){
      $(this).css('background-color','lightgrey');
      });
}

//Event listeners are used to trigger grid creation and modify the colors - color input
//The function make grid with the button
//Clear all to dynamically clear the table


$('form').submit(function(evt){
  evt.preventDefault();
  makeGrid();
  });

$('#clear_button').click(function(){
  $('td').css('background-color','lightgrey');
  });

$('table').on('click','td',function(evt){
  $(evt.target).css({'background-color':color.val()});
  });
});
