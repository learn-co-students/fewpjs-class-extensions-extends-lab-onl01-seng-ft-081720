// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((sum, value) => sum + value)
    }
}
class Triangle extends Polygon {
 get isValid() {
     const [side1, side2, side3] = this.sides
     console.log(side1, side2, this.sides)
     if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2)) {
         return true
     } else {
         return false
     }
     console.log(this.sides)
 }
}
class Square extends Polygon {

    get isValid() {
        if ((this.countSides === 4) && (this.perimeter / 4 === this.sides[0])) {
            return true
        } else {
            return false
        }

    }
 get area() {
     return this.sides[0] * this.sides[0]

 }
}
