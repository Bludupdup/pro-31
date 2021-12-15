class Drops{
     constructor(x,y){
         var options ={
             friction : 1,
             density : 1.2
         }
         this.x  = x;
         this.y = y;
         this.radius = 5;
         this.body = Bodies.circle(this.x,this.y,this.radius,options);
         World.add(world,this.body);
     }
     display(){
         var angle = this.body.angle;
         var position = this.body.position;
         push();
         rotate(angle);
         translate(position.x,position.y);
         fill("blue");
         ellipseMode(RADIUS);
         ellipse(0,0,this.radius,this.radius);    
         pop();
     }
      update(){
          if(this.body.position.y > height){
             Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
          }
      }

}