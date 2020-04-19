class Slingshot{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:15,
            stiffness:0.2
        }
        this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,
            this.sling.bodyB.position.x,this.sling.bodyB.position.y);
    }
}