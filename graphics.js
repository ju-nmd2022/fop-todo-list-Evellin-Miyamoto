/* To Do List
Foundations of Programming - Jönköping University
Evellin Miyamoto */

// Variables
let canvas;

// Rectangles draw
function scenery() {
  background(255, 255, 255);
  noStroke();
  // Use percentages for rectangle positions and sizes
  fill(254, 234, 250);
  rect(width * 0.2, height * 0.1, width * 0.6, height * 0.75, 40);
  fill(222, 226, 255);
  rect(width * 0.18, height * 0.08, width * 0.6, height * 0.75, 40);
}

/* Code inspired by the night sky - Garrit's class
designed with clouds */
let clouds = [];

function initializeClouds() {
  for (let i = 0; i < 20; i++) {
    const cloud = {
      x: Math.floor(Math.random() * windowWidth),
      y: Math.floor(Math.random() * windowHeight),
      alpha: random(255),
      speed: random(0.03, 0.05),
    };
    clouds.push(cloud);
  }
}

function cloudDraw(x, y, s, alpha) {
  push();
  fill(255, 255, 255, alpha);
  ellipse(x, y, s);
  ellipse(x + 15, y, s);
  ellipse(x + 30, y, s);
  ellipse(x + 15, y - 5, s);
  pop();
}

function setup() {
  // Use windowWidth and windowHeight to make the canvas responsive
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");

  initializeClouds();
}

function draw() {
  scenery();
  noStroke();

  // Draw clouds after rectangles to appear on top
  for (let cloud of clouds) {
    cloudDraw(cloud.x, cloud.y, 20, cloud.alpha);
    cloud.alpha = noise(cloud.speed * frameCount) * 255;
  }
}

// Resize canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Reposition the clouds within the visible window
  clouds.forEach((cloud) => {
    cloud.x = random(width);
    cloud.y = random(height);
  });
}

//debug with chatgpt
