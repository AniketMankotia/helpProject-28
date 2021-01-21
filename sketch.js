
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundObj;
var treeObj,treeImage;
var stoneObj;
var boyObj,boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var launcherObj;

function preload(){
	boyImage=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 620);


	engine = Engine.create();
	world = engine.world;
	

	stoneObj = new Stone(220,460,50,50);

	groundObj = new Ground(650,612,1300,10);
	

	//treeObj = new Tree(1005,360,400,500);

	mango1 = new Mango(880,290,34);
	mango2 = new Mango(950,200,25);
	mango3 = new Mango(1000,240,32);
	mango4 = new Mango(935,255,24);
	mango5 = new Mango(950,320,30);
	mango6 = new Mango(1000,175,28);
	mango7 = new Mango(1060,170,30);
	mango8 = new Mango(1040,280,28);
	mango9 = new Mango(1085,225,30);
	mango10 = new Mango(1100,280,28);
	mango11 = new Mango(1160,290,30);

	launcherObj = new launcher(stoneObj.body ,{x:220,y:460});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");


  groundObj.display();
  launcherObj.attach();
  
  //treeObj.display();
  
  
  

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);
 
  drawSprites();

  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

 
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcherObj.fly();
}


function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
if(distanxce<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
}

}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x:220,y:460});
		launcherObj.attach(stoneObj.body,{x:220,y:460});
	}
}

