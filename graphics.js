/* To Do List
Foundations of Programming - Jönköping University
Evellin Miyamoto */

//Variables
let width = 900;
let height = 800;
let canvas;

/* To make the canvas as a background
https://www.youtube.com/watch?v=OIfEHD3KqCg
https://github.com/processing/p5.js/issues/3073 */
function setup() {
  canvas = createCanvas(900, 700);
  canvas.style("z-index", "-1");
  canvas.position(280, 80);
}

//Retangles draw
function scenery() {
  background(255, 255, 255);
  noStroke();
  fill(254, 234, 250);
  rect(220, 60, 500, 600, 40);
  fill(222, 226, 255);
  rect(200, 40, 500, 600, 40);
}

/*Code inspired by the night sky - Garrit's class
designed with clouds*/
let clouds = [];

for (let i = 0; i < 20; i++) {
  const cloud = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    alpha: Math.random(),
  };
  clouds.push(cloud);
}

function cloudDraw(x, y, s) {
  push();
  ellipse(x, y, s);
  ellipse(x + 15, y, s);
  ellipse(x + 30, y, s);
  ellipse(x + 15, y - 5, s);
  pop();
}

function draw() {
  scenery();
  noStroke();

  for (let cloud of clouds) {
    fill(255, 255, 255, Math.abs(Math.sin(cloud.alpha)) * 255);
    cloudDraw(cloud.x, cloud.y, 20);
    //ellipse(cloud.x, cloud.y, 20);
    cloud.alpha = cloud.alpha + 0.03;
  }
}
