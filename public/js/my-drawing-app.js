/* The code for our drawing application! 
Feel free to delete any/all of it and replace with your own functionality. */

var path;
var currentColor = 'black'
var currentWidth = 5

tool.onMouseDown = function(event) { //This code in this function is called whenever the mouse is clicked.
    path = new Path();     // Create a new path each time.
    path.add(event.point);
    path.strokeColor = currentColor;
    path.strokeWidth = currentWidth;
    console.log(event.point); //this commands log to the Console the coordinates of the mouse click. Feel free to delete it! 
}
tool.onMouseDrag = function(event) {
    path.add(event.point); //Add points to the path as the user drags their mouse.
}

$('#default').on('click', function (e) { //jquery click event code for our "pencil" button.
    currentColor = 'black';  //change the color to black
    currentWidth = 5;       //change the width to 5
    $().select
    
})


// $('#thick-green').on('click', function (e) { //jquery button click code for our "green paint" button.
//     currentColor = 'green';
//     currentWidth = 15;
// })


$('#eraser').on('click', function (e) { //jquery button click code for our eraser button.
    currentColor = 'white';
    currentWidth = 20;
})




// New code for toolbar
$('.tool').on('click', function (e) {
  currentColor = $(this).data('color');
  currentWidth = $(this).data('width');

  // Hide all toolbars
  $('.toolbar').hide();

  // Show the toolbar for the selected tool
  $('#' + this.id + '-toolbar').show();
});

$('#default-color').on('input', function() {
  currentColor = $(this).val();
});

$('#default-size').on('input', function() {
  currentWidth = $(this).val();
});

$('#eraser-size').on('input', function() {
  currentWidth = $(this).val();
});

function applyFilter() {
    var canvas = document.getElementById('my-canvas');
    var context = canvas.getContext('2d');

    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    for (var i = 0; i < data.length; i += 4) {
        var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i]     = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue
    }

    context.putImageData(imageData, 0, 0);
}



function applySepia() {
    var canvas = document.getElementById('my-canvas');
    var context = canvas.getContext('2d');

    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    for (var i = 0; i < data.length; i += 4) {
        var red = data[i];
        var green = data[i + 1];
        var blue = data[i + 2];

        // Apply sepia formula
        data[i] = (red * 0.393) + (green * 0.769) + (blue * 0.189); // Red
        data[i + 1] = (red * 0.349) + (green * 0.686) + (blue * 0.168); // Green
        data[i + 2] = (red * 0.272) + (green * 0.534) + (blue * 0.131); // Blue
    }

    context.putImageData(imageData, 0, 0);
}




function applyTritanopia() {
    var canvas = document.getElementById('my-canvas');
    var context = canvas.getContext('2d');

    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    for (var i = 0; i < data.length; i += 4) {
        var red = data[i];
        var green = data[i + 1];
        var blue = data[i + 2];

        // Apply Tritanopia color transformation
        data[i] = (red * 0.95) + (green * 0.05); // Red
        data[i + 1] = (red * 0.433) + (green * 0.567); // Green
        data[i + 2] = (red * 0.475) + (green * 0.525); // Blue
    }

    context.putImageData(imageData, 0, 0);
}

$('#black-white').on('click', function (e) {
    applyFilter();
});

$('#sepia').on('click', function (e) {
    applySepia();
});

$('#tritanopia').on('click', function (e) {
    applyTritanopia();
});










