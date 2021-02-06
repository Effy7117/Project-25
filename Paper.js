class Paper {
    constructor(x,y,r) {
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:1.4
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("sprites/paper.png");
        this.body = Bodies.circle(x,y,r, options);
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        fill("purple");
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,this.r,this.r);
    }
}