class Polygon{
    constructor(polyArr) {
       this.polyArr = polyArr
    }

    get countSides(){
        let count = this.polyArr.length
        return count
    } 
    get perimeter(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.polyArr.reduce(reducer,0)
    }
    }
class Triangle extends Polygon{
    get isValid(){
        let sideA = this.polyArr[0]
        let sideB = this.polyArr[1]
        let sideC = this.polyArr[2]
        if (this.countSides === 3){
            if(sideA+sideB > sideC && sideA+sideC > sideB && sideC+sideB > sideA){
             return true
            }  
        }
        return false
    }
}

class Square extends Polygon{
    get isValid(){
        let sideA = this.polyArr[0]
        let sideB = this.polyArr[1]
        let sideC = this.polyArr[2]
        let sideD = this.polyArr[3]
        if (this.countSides === 4) {
            if ((sideA === sideB) && (sideA === sideD) && (sideA === sideB)) {
                return true
            } 
        }
        return false
     }
     get area() {
         return this.polyArr[0] * this.polyArr[0]
     }
}