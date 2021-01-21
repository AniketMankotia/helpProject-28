class Boy{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("images/boy.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position; 
        push();
        translate(pos.x,pos.y);
        strokeWeight(4);
        imageMode(CENTER); 
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}