let gridSize = 16;
let colorArray = [];
let currentColor = '#000000';

function generateColorPicker() {
  let red = '';
  let green = '';
  let blue = '';
  let hexConvert = ['00', '55', 'AA', 'FF'];
  for (i=0; i<4; i++) {
    for (m=0; m<4; m++) {
      for (n=0; n<4; n++) {
        colorArray.push("#"+hexConvert[i]+hexConvert[m]+hexConvert[n]);
      }
    }
  }
  for (i=0; i < 64; i++) {
    $('#colorPicker').append('<div class="colorSquare"></div>');
  }
  for (i=0; i < 64; i++) {
    $('#colorPicker').children().eq(i).css('background-color', colorArray[i]);
  }
  $('#colorPicker').children().first().addClass('selectedColor');
}

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
  generateColorPicker();
  generateGrid(gridSize);
  
  $('#clearButton').on('mouseup', function() {
    generateGrid(gridSize);
  });

  $('#gridResize').on('mouseup', function() {
    resizeGrid();
  });

  $(document).on('mouseenter', '.gridSquare', function() {
    $(this).css('background-color', currentColor);
  });

  $('#colorPicker').on('mouseup', 'div', function() {
    $(this).siblings().removeClass('selectedColor');
    $(this).addClass('selectedColor');
    currentColor = colorArray[$('#colorPicker').children().index(this)];
  })
});
