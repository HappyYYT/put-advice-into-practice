const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// Paths
// Triangle
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.stroke();
ctx.fillStyle = "coral";
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(150, 200);
ctx.lineTo(250, 200);
ctx.stroke();
// Rectangle
ctx.beginPath();
ctx.rect(300, 50, 150, 100); // x, y, width, height
ctx.fillStyle = "teal";
ctx.fill();


