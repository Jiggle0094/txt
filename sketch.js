var w,c,s,w1
function setup() {
  createCanvas(1600,400);
  s=random(50,90)
  w1=random(400,1500)
t=random(22,83)
  c=createSprite(50,200,50,50)
   c.velocityX=s
   w=createSprite(1500,200,60,height)
}

function draw() {
  
  background(255,255,255);  
  if(w.x-c.x<w.width/2+c.width/2)
  {
    c.velocityX=0
    var d=s*0.5*w1*s/t*t*t
    if(d<100)
    {w.shapeColor="green"}
 else
    w.shapeColor="red"
  }
  drawSprites();
}