class Ball{
    constructor(x,y,r){

var options={
    restitution:0.4,
    friction:1
}
this.r=r;
this.body=Bodies.circle(x,y,this.r,options)
this.color=color(random(0,255),random(0,255),random(0,255))
    }
display(){
push()
    ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.ythis.r,this.r)
fill(this.color)
rotate(this.body.angle)
pop()

}

}