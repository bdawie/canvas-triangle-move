const canvas = document.getElementById('myCanvas');

// Get the drawing object
const ctx = canvas.getContext('2d');

// Defining middle point of the canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Eventlistener for mouse movement
window.addEventListener('mousemove',(e)=>{

    clearArea();
    
    drawTriangle(e);
      
});

function clearArea(){
    // Set the canvas to the default position
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // Clear the whole canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function drawTriangle(e){
    // Translating canvas origin to the center
    ctx.translate(centerX,centerY);

    // Finding the angle between mouse (X,Y) and the origin point (center)
    let angle = Math.atan2( e.pageY - centerY,  e.pageX - centerX);

    // Rotate the canvas origin
    ctx.rotate(angle + 1.5);

    // Begin drawing 
    ctx.beginPath();
    // Drawing the triangle
    ctx.moveTo(-30,30);
    ctx.lineTo(30,30);
    ctx.lineTo(0,-50);
    ctx.closePath();
    ctx.stroke();
}