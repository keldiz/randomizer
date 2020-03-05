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
  for (let i = 0; i <= 15; i++){
    kicks[i] = loadImage(`assets/kicks_${i}.jpg`)
  }
}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");



  background(random(255), random(255), random(255), );
  textSize(35);
  text("CLICK TO RANDOMIZE", 100, 300);
  imageMode(CENTER);
  frameRate(100);
  // button = createButton("click to randomize");
  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");


}


function draw() {
  if (animating === true) {
    clear();
    image(kicks[imageCounter], width / 2, height / 2);
    if (imageCounter < kicks.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
    fill(random(255), random(255), random(255), random(255));
    rect(random(width), random(height), random(20), random(200), random(70));
    fill(random(255), random(255), random(255), random(255));
    rect(random(width), random(height), random(200), random(50), random(70));
  }
}




function randomizer() {
  animating = false;
  if (dogs[0]) {
    // background(random(255), random(255), random(255));
    clear();
    randomIndex = int(random(dogs.length));
    // fill('white');
    image(random(kicks), width / 2, height / 2);
    dogs.splice(randomIndex, 1);
    text(dogs[randomIndex].name + "'s favorite color is " + dogs[randomIndex].color, width / 2, height / 2);
  } else {
    background(random(255), random(255), random(255));
    fill('white');
    text("nothing is left!", 170, 300);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 1000);
}

function mouseMoved() {
  stroke(random(255), random(255), random(255), random(255));
  strokeWeight(random(20));
  point(mouseX, mouseY);
  // strokeWeight(0);
}
