const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var b1,b2,b3,b4,b5;
var rope1,rope2,rope3,rope4,rope5;
var world;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob_options={
		isStatic:false,
		restitution:1,
		friction:0,
		density:0.8	
	}
    b1 =Bodies.circle(320,380,20,bob_options);
    World.add(world,b1);

	b2 = Bodies.circle(360,380,20,bob_options);
    World.add(world,b2);

	b3 = Bodies.circle(400,380,20,bob_options);
    World.add(world,b3);

	b4 = Bodies.circle(440,380,20,bob_options);
    World.add(world,b4);

	b5 = Bodies.circle(480,380,20,bob_options);
    World.add(world,b5);

    rope1=new rope(b1,roof,-80, 0)
	rope2=new rope(b2,roof,-40, 0)
	rope3=new rope(b3,roof,0, 0)
	rope4=new rope(b4,roof,40, 0)
	rope5=new rope(b5,roof,80, 0)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  
  //create ellipse shape for multiple bobs here
  ellipse(b1.position.x,b1.position.y,40,40);
  ellipse(b2.position.x,b2.position.y,40,40);
  ellipse(b3.position.x,b3.position.y,40,40);
  ellipse(b4.position.x,b4.position.y,40,40);
  ellipse(b5.position.x,b5.position.y,40,40);

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1,b1.position,{x:-50,y:-45})
	}
}