class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length:10
        }
        this.boy=loadImage("images/boy.png");
        this.tree=loadImage("images/tree.png");
        this.pointB=pointB;
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
    fly(){
        this.launch.bodyA=null;
    }
    attach(){
        image(this.boy,180,415,200,200);
        image(this.tree,820,100,400,500);
        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}