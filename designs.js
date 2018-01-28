// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//Below the code to draw pixel art on a customizable canvas

//defining variables, accessing the DOM using methods of the document object
$(document).ready(function() {
  let designCanvas=$('#pixel_canvas');
  let table=$('table');
  let color=$('input[type="color"]');

//set the size of the cross stitch canvas
function makeGrid(height, width) {
   let Height=$('#input_height').val();
	 let Width=$('#input_width').val();
	  table.html('');
    table.css('background-color','white');  


//customizable canvas - height to extend cells, width to extend rows
	for (let h=1; h<=Height ;h++){
    designCanvas.append
      ('<tr><td></td></tr>');}
  for (let w=1; w<Width ;w++){
      $('tr').append
      ('<td></td>');
  }}

//Buttons
//Declaring functions and attaching them to DOM objects as event listeners
//Event listeners is used to trigger grid creation and to modify the grid colors
//Loops to dynamically clear and create the table based on user input
$('form').submit(function(e){   //the function make grid with the button
  e.preventDefault();
  makeGrid();
  });
$('#clear_button').on('click',function(){  //clear all
  $('td').css('background-color','white');
  });
$('table').on('click','td',function(evt){
  $(evt.target).css({'background-color':color.val()});
  });
});
