var Engine = Matter,Engine
World= Matter,World
Events= Matter,Events
Bodies= Matter,Bodies

var particles = [];
var plinkos = [];
var division=[];
var divisionHeight =200;
var score =0;

function setup() {
  createCanvas(800,400);
  engine =Engine.create();
world =engine.World
ground1= new ground(width/2,height,weidth,20)

for(var k=0;k<=width;k=k+80 ){
Divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight))
}

for (var j =40;j<=width;j=j+50){
  plinkos.push(new pinko(j,75))
}
for (var j = 15;j<=width-10;j=j+50){
  plinkos.push()
}
























}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  ground1.display()
  for(vari=0;1>pinko.length;i++){
pinko.display()
  }
  
if(fraeCount%60===0){
particles.push(new partical(random(100,700),10,10))

}

for(var j=0;j<partical.length;j++){
particles[j].display()
}

for(var k=0;k<division.length;k++){
division[k].display()
}







  drawSprites();
}