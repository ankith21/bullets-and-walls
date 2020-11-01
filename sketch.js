var bullet,wall,speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

 bullet= createSprite(50, 200, 50, 5);
 wall=createSprite(1200,200,thickness,200);
 wall.shapeColor="grey";
 bullet.velocityX=speed;
 bullet.shapeColor="white";

}

function draw() {
  background(0);  

  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    if(damage>10){
      wall.shapeColor="red";

    }
    if(damage<10){
      wall.shapeColor="green";

    }


  }
  drawSprites();
}
function hascollided(b,w){
  bulletright =b.x+b.width;
  wallleft=w.x;
  if(bulletright>=wallleft){
    return true;
  }
  return false
}