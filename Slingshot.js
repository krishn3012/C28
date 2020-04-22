class Slingshot{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:15,
            stiffness:0.2
        }
        this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling);

        this.pointB=point2;
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){
        if (this.sling.bodyA!=null){
        strokeWeight(3);
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,
            this.pointB.x,this.pointB.y);
        }
    }

  
}