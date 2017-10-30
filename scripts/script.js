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

function resizeGrid() {
  var newSize = prompt("Enter a grid size between 1 and 100");
  if (isNaN(newSize)) {
    alert("Please enter a whole number between 1 and 100");
  } else if (newSize < 1) {
    gridSize = 1;
  } else if (newSize > 100) {
    gridSize = 100;
  } else {
    gridSize = Math.floor(newSize);
  }
  generateGrid(gridSize);
}

$(document).ready(function() {
  generateGrid(gridSize);
  
  $('#clearButton').on('mouseup', function() {
    generateGrid(gridSize);
  });

  $('#gridResize').on('mouseup', function() {
    resizeGrid();
  });

  $(document).on('mouseenter', '.gridSquare', function() {
    $(this).css('background-color', '#000');
  });
});
