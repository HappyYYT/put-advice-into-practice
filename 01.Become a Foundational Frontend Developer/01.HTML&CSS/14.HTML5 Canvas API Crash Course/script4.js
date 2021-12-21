const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Animation 1
const circle = {
  x: 200,
  y: 200,
  size: 30,
  dx: 5,
  dy: 4,
};

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
  ctx.fillStyle = "purple";
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

  drawCircle();

  // change position
  circle.x += circle.dx;
  circle.y += circle.dy;

  // Detect side walls
  if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
    circle.dx *= -1; // circle.dx = circle.dx * -1
  }

  // Detect top and bottom walls
  if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
    circle.dy *= -1;
  }
  requestAnimationFrame(update);
}

update();
