



var hr=hour();
var mn = minute();
var sc = second();

function setup() {
  createCanvas(800,400);
  
}


function draw() {

  background(255,255,255); 
  angleMode(DEGREES);

  let hr=hour();
  text('Current hour:\n'+hr,5,50)
  let m = minute();
text('Current minute: \n' + m, 10, 100);
let s = second();
text('Current second: \n' + s, 15, 150);
  
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,100,100,100,360);
  hrAngle = map(hr,0,60,0,360);
  

  stroke(255,0,0)
  strokeWeight(7)
 
  translate(200,200);
  

  drawSprites();
  
}