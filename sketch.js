let col = {
  r: 255,
  g: 0,
  b: 0,


}
let randomIndex;
let animating = true;

function setup() {
  createCanvas(400, 400);
  background(147, 112, 219);
}


function draw() {
  if (animating === false && frameCount % 14 === 0) {
    col.r = random(100, 255);
    col.g = 0;
    col.b = random(100, 190);
    point.x = random(0, width);
    point.y = random(0, height);
    fill(col.r, col.g, col.b, 25)
    ellipse(random(width), random(height), random(64, 64));

  }

  {
    let d = random(0, 255);
    let e = random(0, 255);
    let f = random(0, 255);
    fill(d, e, f);
    noStroke();
    rect(mouseX, mouseY, -2, 70);
    ellipse(mouseX, mouseY, 40, 7);
  }
}


function randomizer() {
  animating = false;
  let a = random(150, 255);
  let b = random(150, 255);
  let c = random(150, 255);
  background(a, b, c);
  randomIndex = int(random(col.length));

}



function mousePressed() {
  animating = false;
  randomizer();
  setTimeout(randomizer, 20000);


}
