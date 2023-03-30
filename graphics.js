background(255, 255, 255);
noStroke();
fill(254, 234, 250);
rect(220, 120, 500, 600, 40);
fill(222, 226, 255);
rect(200, 100, 500, 600, 40);

//Code inspired by the night sky - Garrit's class
let clouds = [];

for (let i = 0; i < 20; i++) {
  const cloud = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    alpha: Math.random(),
  };
  clouds.push(cloud);
}

function cloudDraw(x, y) {
  fill(255, 255, 255);
  ellipse(x, y, 20);
  ellipse(x + 15, y, 20);
  ellipse(x + 30, y, 20);
  ellipse(x + 15, y - 5, 20);
}

function draw() {
  noStroke();

  for (let cloud of clouds) {
    fill(216, 187, 255, Math.abs(Math.sin(cloud.alpha)));
    cloudDraw(cloud.x, cloud.y, 3);
    cloud.alpha = cloud.alpha + 0.02;
  }
}
