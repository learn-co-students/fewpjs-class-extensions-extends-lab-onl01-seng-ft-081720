// Your code here
class Polygon {
    constructor(side) {
        this.side = side;
    }
    get countSides(){ return this.side.length}
    
    get perimeter(){ 
        let p = 0
        this.side.forEach(s => { p +=s
        });
        return p;
    }
}

class Triangle extends Polygon{
    get isValid() {
        if (this.countSides !== 3) { return false }
        const s1 = this.side[0]
        const s2 = this.side[1]
        const s3 = this.side[2]
        if (s1 < (s2 + s3) && s2 < (s1 + s3) && s3 < (s1 + s2)) { return true }
        else { return false }
    }
}
class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) return false
        const s1 = this.side[0]
        const s2 = this.side[1]
        const s3 = this.side[2]
        const s4 = this.side[3]
        return (s1 === s2 && s2 === s3 && s3 === s4)
    }
    get area(){
        let a = 0;
        this.side.forEach(s => {
           a = s * s;
        });
        return a;
    }
}