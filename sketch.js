
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;

function preload(){
    binImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1100,600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	binPart1 = new Dustbin(912,515,10,120);
    binPart2 = new Dustbin(962,575,110,10);
    binPart3 = new Dustbin(1014,515,10,120);
    //Create a Ground
    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  binPart1.display();
binPart2.display();
binPart3.display();
  
  
 
drawSprites();
  
 
}

function keyPressed() {
    if(keyCode === UP_ARROW){
        if (keyCode === UP_ARROW) {

            Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:65,y:-84});
    
        
          }
        }
    }
