class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((x,y) => x += y)
    }
    
}

class Triangle extends Polygon {
    get isValid() {
        return this.countSides === 3 && (this.sides[0] + this.sides[1]) > this.sides[2] && (this.sides[0] + this.sides[2]) > this.sides[1] && (this.sides[1] + this.sides[2]) > this.sides[0]
    }
}

class Square extends Polygon {
    get area(){
        return this.sides[0] * this.sides[1]
    }
    get isValid(){
        let y = this.sides.slice(1)
        console.log(y)
        return this.countSides === 4 && y.every(x => x === this.sides[0])
    }
}