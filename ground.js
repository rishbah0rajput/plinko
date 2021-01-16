class ground {
constructor(){
var options={
    isStatic:true
}
this.body = Bodies.rectangle(x,y,height,weidth,options)
this.weidth=weidth
this.height=height
World.add(world,this.body)
}
display(){
var pos =this.body.position;
restMode(CENTER)
fill("wihte")
rect(pos.x,pos.y,this.weidth,this.height)
}
}