class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((x,y) => x += y)
    }
}

class Triangle extends Polygon {
    get isValid () {
        if (this.countSides === 3) {
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            return ((a+b > c) && (a+c > b) && (c+b > a))
        }        
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.countSides === 4) {
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            let d = this.sides[3]
            return ((a === b)&&(a === c)&&(a === d))
        }
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}

