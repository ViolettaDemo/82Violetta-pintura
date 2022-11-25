var mouseEvent = "empty"
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedow);
function my_mousedow(e){

    mouseEvent="mousedow";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

position_X=e.clientX-canvas.offsetLeft;

position_Y=e.clientY-canvas.offsetTop;

if(mouseEvent=="mousedow"){

    ctx.beginPath(); 

    ctx.strokeStyle = color; 

    ctx.lineWidth = width_of_line;

    //ctx.moveTo(last_position_of_x, last_position_of_y);

    //ctx.lineTo(position_X, position_Y);
ctx.arc(position_X,position_Y,40,0,2*Math.PI);
    ctx.stroke();

}

last_position_of_x=position_X;

last_position_of_y=position_Y;

}

canvas.addEventListener("mouseup",my_mouseup);function my_mouseup(e){mouseEvent="mouseUP";} canvas.addEventListener("mouseleave",my_mouseleave);function my_mouseleave(e){mouseEvent="mouseleave"; }
