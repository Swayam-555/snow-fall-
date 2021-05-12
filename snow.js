class Snow{
    constructor(x,y,r){
       var options = {
           friction: 1,
           density:0.5
       }
       this.body = Bodies.circle(x,y,r,options)
       this.r = r
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r)
    }
}