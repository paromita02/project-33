
var Engine = Matter.Engine;
 World = Matter.World;
 Events = Matter.Events
 Bodies = Matter.Bodies;

var particle;

var plinkos = [];

var divisions = [];

var divisionHeight=300;

var score =0;

var gameState="play",points=0;

function setup() 
{

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

     for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     }
     for (var j = 75; j <=width; j=j+50) 
     {
       plinkos.push(new Plinko(j,75));
     }
     for (var j = 50; j <=width-10; j=j+50) 
     {
       plinkos.push(new Plinko(j,175));
     }
      for (var j = 75; j <=width; j=j+50) 
     {
       plinkos.push(new Plinko(j,275));
     }
      for (var j = 50; j <=width-10; j=j+50) 
     {
       plinkos.push(new Plinko(j,375));
     }
     ground = new Ground(width/2,height,width,20);
}
function draw() 
{
     background(127,255,0);

      textSize(30)
      text("score:"+score,10,40);
      textSize(22)
      text(" 500 ", 20, 550);
      text(" 500 ", 100, 550);
      text(" 500 ", 180, 550);
      text(" 500 ", 260, 550);
      text(" 100 ", 340, 550);
      text(" 100 ", 420, 550);
      text(" 100 ", 500, 550);
      text(" 200 ", 580, 550);
      text(" 200 ", 660, 550);
      text(" 200 ", 740, 550);
      fill("white"); 

      fill("olive")
      textSize(25)
      stroke(2)
     text("Paro's plinko",360,40);


      Engine.update(engine);
  
      for (var i = 0; i < plinkos.length; i++) {  
     plinkos[i].display();  
     }
      if(particle!=null)
      {
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;
                 if ( points>= 5) gameState ="end";                          
             }
             else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( points>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
             {
                   score = score + 200;
                   particle=null;
                   if ( points>= 5)  gameState ="end";

             }      
  
  
 
  
  
  
        }


     }
        for (var i = 0; i < divisions.length; i++) {  
         divisions[i].display();  
       }
      if(gameState=="end"){
      textStyle("italic")
      textSize(100);
      fill("red")
       text("GAME OVER!",50,250);
       textSize(50)
        fill("crimson")
       text(":(",400,300);
       textSize(25)
       text("please press,Ctrl+F5to reset",250,400)
   }
    ground.display();
  }
  function mousePressed()
{
  if(gameState!=="end")
  {
      points++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}

