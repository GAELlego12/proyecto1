function setup() {
  createCanvas(800,800);
  j1 =createSprite(600, 200, 50, 50);
  j2 =createSprite(200, 200, 50, 50);
  j1.shapeColor="skyblue";
j2.shapeColor="skyblue";
}

function draw() {
  background(255,255,255);  
  drawSprites();
j1.y=World.mouseY;
j1.x=World.mouseX;


if(j1.x - j2.x <j1.width/2+ j2.width/2 &&j1.y - j2.y <j1.height/2+ j2.height/2 &&j2.x - j1.x <j2.width/2+ j1.width/2 &&j2.y - j1.y <j2.height/2+ j1.height/2) {
  j1.shapeColor="blue";
  j2.shapeColor="blue";
}
else{
  j1.shapeColor="skyblue";
  j2.shapeColor="skyblue";


}









}