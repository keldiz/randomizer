// dogs I have loved before
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

function setup() {
  createCanvas(600, 600);
  background(200);

}

function draw() {

}

function mousePrressed(){
  background(random(200, 255));
  randomIndex = int(random(dogs.length));
  text(dogs[randomIndex].name, 50, 50);
  dogs.splice(randomIndex, 1);




}
