interface IPoint {
    x:number;
    y:number;
}

interface ICompare {
    Compare(p2:IPoint):number;
}

class Point implements IPoint, ICompare {
    public x:number;
    public y:number;
    
    constructor(x:number, y=0){
        this.x = x;
        this.y = y; 
    }

    public Compare(p2:IPoint):number {
        var p1Val = this.x * this.x + this.y * this.y;
        var p2Val = p2.x * p2.x + p2.y * p2.y;
        var result = p1Val - p2Val;
        if (result == 0){
            return 0;
        } else if(result > 0) {
            return 1;
        } else {
            return -1;
        }
    }
}