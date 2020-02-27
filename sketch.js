let dogs = [{
  name: "chase",
  color: "dog treat color"
}, {
  name: "cyber",
  color: "brown"
}, {
  name: "tony",
  color: "black"

}, {
  name: "jm",
  color: "white",
}];

let randomIndex;
let counter = 0;
let animating = false;

function setup() {
  createCanvas(600, 600);
  background(200);
  text("click to randomize", 24, 8);
  // setTimeout(changeBackground,1000);

}

function draw() {
  if (animating == true) {

    rect(random(width), random(height), random(24, 248));
  }
}
// function changeBackground(){}

function randomizer() {
  animating = false;
  if (dogs[0]) {
    background(random(200, 255));
    randomIndex = int(random(dogs.length));
    text(dogs[randomIndex].name + "'s favorite color is" + dogs[randomIndex].color, 24, 24);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(224, 248));
    text("nothing is left!", 24, 24);
  }
}


function mousePressed() {
  //background(random(200, 255));
  //randomIndex = int(random(dogs.length));
  //text(dogs[randomIndex].name, 50, 50);
  //dogs.splice(randomIndex, 1);

animating = true;
setTimeout(randomizer, 2424);


}
