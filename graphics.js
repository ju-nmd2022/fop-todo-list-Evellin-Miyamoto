function scenery() {
  background(255, 255, 255);
  noStroke();
  fill(254, 234, 250);
  rect(220, 120, 500, 600, 40);
  fill(222, 226, 255);
  rect(200, 100, 500, 600, 40);
}

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
