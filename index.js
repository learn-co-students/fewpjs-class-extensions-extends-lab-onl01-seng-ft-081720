class Polygon {
    constructor(sidesArr){
        this.sidesArr = sidesArr
    }
    get countSides() {
        return this.sidesArr.length
    }

    get perimeter() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.sidesArr.reduce(reducer)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.sidesArr[0]
        let side2 = this.sidesArr[1]
        let side3 = this.sidesArr[2]

       if (this.countSides === 3) {
           if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2 ) {
               return true
           } 
       }
       return false
    }
}

class Square extends Polygon {
    get isValid() {
        let side1 = this.sidesArr[0]
        let side2 = this.sidesArr[1]
        let side3 = this.sidesArr[2]
        let side4 = this.sidesArr[3]

       if (this.countSides === 4) {
           if ((side1 === side2) && (side1 === side3) && (side1 === side4)) {
               return true
           } 
       }
       return false
    }
    get area() {
        return this.sidesArr[0] * this.sidesArr[0]
    }
}