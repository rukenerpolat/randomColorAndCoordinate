// Coordinates Codes

var demo = document.getElementById("demo");

function onMouseMove(e) {
    let x = e.clientX;
    let y = e.clientY;
    demo.style.left = x + "px";
    demo.style.top = y + "px";
    let coor = "Coordinates: (" + x + "," + y + ")";
    demo.innerHTML = coor;
    changeBackgroundColor();
}

// Mouse Codes

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('mousemove', onMouseMove);
});


// Change Background Color Codes

function changeBackgroundColor() {

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var color = "rgb(" + red + "," + green + "," + blue + ")";

    document.body.style.backgroundColor = color;
}
