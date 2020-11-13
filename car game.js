var w,c,s,w1
function setup() {
  createCanvas(1600,400);
  s=random(50,90)
  w1=random(400,1500)
  c=createSprite(50,200,50,50)
   c.velocityX=s
   w=createSprite(1500,200,60,height)
}

function draw() {
  
  background(255,255,255);  
  if(w.x-c.x<w.width/2+c.width/2)
  {
    c.velocityX=0
    var d=s*0.5*w1*s/22500
    if(d>180)
    {c.shapeColor="red"}
    if(d>100&&d<180)
    {c.shapeColor="blue"}
    if(d<100)
    c.shapeColor="green"
  }
  drawSprites();
}