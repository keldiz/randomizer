let dogs = [{
  name: "dillion",
  color: "red"
}, {
  name: "ziggy",
  color: "blue"
}, {
  name: "mercedes",
  color: "green"
}, {
  name: "jorge",
  color: "yellow"
}, {
  name: "zay",
  color: "black"
}, {
  name: "jay",
  color: "white"
}];

let randomIndex;
let animating = false;
let kicks = [];
let imageCounter = 0;
let button;
let cnv;


function preload() {

  for (let i = 0; i <= 15; i++) {
    kicks[i] = loadImage(`assets/kicks_${i}.jpg`)


  }



}

function setup() {
  cnv = createCanvas(600, 600);
cnv.parent("#canvasDiv");



  background(147, 112, 219);
  imageMode(CENTER);
  frameRate(100);
// button = createButton("click to randomize");
button = select('#randButton');
button.mousePressed(buttonPressed);
button.class("randomizerButton");


}


function draw() {
  if (animating === false && frameCount % 14 === 0) {

    clear();
    image(kicks[imageCounter], width / 2, height / 2);
    imageCounter++;

    if (imageCounter < kicks.length - 1) {
      imageCounter++;
    } else {

      imageCounter = 0;

    }



  // //   col.r = random(100, 255);
  // //   col.g = 0;
  // //   col.b = random(100, 190);
  // //   point.x = random(0, width);
  // //   point.y = random(0, height);
  // //   fill(col.r, col.g, col.b, 25)
  // //   ellipse(random(width), random(height), random(64, 64));
  // //
  // // }
  //
  // {
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
  image(random(kicks), width / 2, height / 2);
  imageCounter++;

}



function buttonPressed() {
  animating = false;
  randomizer();
  setTimeout(randomizer, 20000);

}
