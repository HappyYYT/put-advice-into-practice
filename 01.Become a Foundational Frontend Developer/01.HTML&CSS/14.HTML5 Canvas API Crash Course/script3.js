const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// Arc (circles)
ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Draw head
// Arc(x, y, radius, startAngle, endAngle, anticlockwise)
ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
// Move to mouth
ctx.moveTo(centerX + 100, centerY);
// Draw mouth
ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// Move left eys
ctx.moveTo(centerX - 60, centerY - 80);

// Draw left eye
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// Move to right eye
ctx.moveTo(centerX + 100, centerY - 80);

// Draw right
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

// Quadratic curve
ctx.moveTo(75, 25);
ctx.quadraticCurveTo(25, 25, 25, 62.5);
ctx.quadraticCurveTo(25, 100, 50, 100);
ctx.quadraticCurveTo(50, 120, 30, 125);
ctx.quadraticCurveTo(60, 120, 65, 100);
ctx.quadraticCurveTo(125, 100, 125, 62.5);
ctx.quadraticCurveTo(125, 25, 75, 25);

ctx.stroke();
