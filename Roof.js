class Roof {
    constructor(x,y,w,h) {
    var options = {
        isStatic:true
    }
    this.w =  w;
    this.h = h;
    this.Body = Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.Body)
    }
    display() {
        rectMode(CENTER)
        rect(this.Body.position.x,this.Body.position.y,this.w,this.h)
    }
}