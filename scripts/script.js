let gridSize = 16;

function generateGrid(gridDimen) {
  let numSquares = gridDimen * gridDimen;
  let squareSize = 600 / gridDimen;

  $('#gridBox').find('div').remove();

  for (i=0; i < numSquares; i++) {
    $('#gridBox').append('<div class="gridSquare"></div>');
  }
  $('.gridSquare').css({'height': squareSize+'px', 'width': squareSize+'px'});
}

$(document).ready(function() {
  generateGrid(gridSize);

  $('.gridSquare').on('mouseenter', function() {
    $(this).css('background-color', '#000');
  });
});
