
var hr,sc,mn;

var scangle,mnangle,hrangle;

function setup() {
  createCanvas(800,400);
  
angleMode(DEGREES);



}

function draw() {
  background(255,255,255);  
  translate (200,200)
  rotate (-90)
  hr = hour()
  sc = second()
  mn = minute()
  
scangle = map(sc,0,60,0,360)
mnangle = map(mn,0,60,0,360)
hrangle = map(hr%12,0,12,0,360)

push ();
rotate(scangle)
stroke ("red")
strokeWeight (7)
line (0,0,100,0)
pop ()

push ();
rotate(mnangle)
stroke ("blue")
strokeWeight (7)
line (0,0,90,0)
pop ()



push ();
rotate(hrangle)
stroke ("green")
strokeWeight (7)
line (0,0,50,0)
pop ()

//drawing the arcs  
strokeWeight(10); 
noFill(); 
//Seconds stroke
stroke("red"); arc(0,0,300,300,0,scangle); 
//Minutes
 stroke("blue"); 
 arc(0,0,280,280,0,mnangle); 
 //Hour 
 stroke("green"); 
 arc(0,0,260,260,0,hrangle);
  drawSprites();
}