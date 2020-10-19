class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic:false,
        'restitution':0.5,
        'friction':0.5,
        'density':0.5

    }
    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.visibility = 255;


    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    
   
     if (this.body.speed<3){
      push()
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(1);
      stroke(0);
      rect(0,0,this.width,this.height);
      pop()

     }else {
     push()
    World.remove(world,this.body)
    this.visibilty = this.visibilty-5;
     pop()

     }
     
  
  }

}
