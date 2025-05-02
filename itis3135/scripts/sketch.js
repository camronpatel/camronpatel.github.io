
let ball;

function setup() {
  createCanvas(900, 750);
  colorMode(HSB, 360, 100, 100, 100);
  // initialise ball at centre
  ball = {
    x: width / 2,
    y: height / 2,
    vx: random(-5, 5),
    vy: random(-5, 5),
    r: 40,
    hue: random(0, 360)
  };
  background(0, 0, 10); // dark backdrop
}

function draw() {
  // Fade previous frames slightly to create a trail effect
  noStroke();
  fill(0, 0, 10, 20); // transparent dark overlay
  rect(0, 0, width, height);

  // Update ball position
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Bounce off walls and change colour on impact
  if (ball.x < ball.r || ball.x > width - ball.r) {
    ball.vx *= -1;
    ball.hue = (ball.hue + random(30, 120)) % 360;
  }
  if (ball.y < ball.r || ball.y > height - ball.r) {
    ball.vy *= -1;
    ball.hue = (ball.hue + random(30, 120)) % 360;
  }

  // Draw the ball
  fill(ball.hue, 80, 100);
  ellipse(ball.x, ball.y, ball.r * 2);
}


