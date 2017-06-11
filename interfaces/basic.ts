interface IPoint {
    x: number;
    y: number;
}


function addPoints(p1:IPoint, p2:IPoint):IPoint {
    this.x = p1.x + p2.x;
    this.y = p1.y + p2.y;
    return {x:this.x, y:this.y}
}
// valid
var pointOne = addPoints({x:1,y:1},{x:4,y:4});
