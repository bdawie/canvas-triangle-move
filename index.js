const canvas = document.getElementById('myCanvas');

const ctx = canvas.getContext('2d');
const centerX = canvas.width/2;
const centerY = canvas.height/2;

ctx.beginPath();
ctx.moveTo(centerX,centerY);
ctx.lineTo(centerX+50,centerY);
ctx.lineTo(centerX+25,centerY+25);
ctx.lineTo(centerX,centerY);
ctx.stroke();
ctx.closePath();