// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


//calls to live
$(document).ready(function() {
  let designCanvas=$('#pixel_canvas');
  let table=$('table');
  let color=$('input[type="color"]');

//for canvas
function makeGrid(height, width) {
   let Height=$('#input_height').val();
	 let Width=$('#input_width').val();
	  table.html('');
    table.css('background-color','white');  //canvas background color in css


  // canvas

	for (let h=1; h<=Height ;h++){  //cells up
    designCanvas.append
      ('<tr><td></td></tr>');}
  for (let w=1; w<Width ;w++){   //rows to extend
$('tr').append
      ('<td></td>');
  }}


  //buttons
  $('form').submit(function(e){   //the function make grid with the button
  e.preventDefault();
  makeGrid();
  });
$('#clear_button').on('click',function(){  //clear all
$('td').css('background-color','white');
  });
$('table').on('click','td',function(evt){   //event listeners for cell colors
$(evt.target).css({'background-color':color.val()});
  });
});
