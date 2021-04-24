class Paper{
    constructor(x, y, radius){
        var option = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, (this.radius-20)/2, option);
        World.add(world, this.body);
        this.image = loadImage("paper.png");
    }
    display(){
        var position = this.body.position;
        push();
        translate(position.x, position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}