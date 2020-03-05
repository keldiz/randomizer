let dogs = [{
  name: "Shabam",
  color: " "
}, {
  name: "Nike",
  color: " "
}, {
  name: "Off-White",
  color: " "
}, {
  name: " ",
  color: " "
}, {
  name: "Sheep",
  color: " "
}, {
  name: "MJ",
  color: " "
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



  background(random(255), random(255), random(255), );
  // textSize(35);
  // text("CLICK TO RANDOMIZE", 100, 300);
  imageMode(CENTER);
  frameRate(8);
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
    ellipse(random(width), random(height), random(20), random(200), random(170));
    fill(random(255), random(255), random(255), random(255));
    ellipse(random(width), random(height), random(200), random(50), random(170));
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
    noStroke();
    textSize(24)
    text(dogs[randomIndex].name + "'s fave kicks " + dogs[randomIndex].color, width / 2, height / 2);
  } else {
    // background(random(255), random(255), random(255));
    nostroke();
    fill('white');
    text("Done!", 170, 300);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 1000);
}

// function mouseMoved() {
//   stroke(random(255), random(255), random(255), random(255));
//   strokeWeight(random(10));
//   point(mouseX, mouseY);
//   // strokeWeight(0);
// }
