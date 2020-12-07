
class Polygon {
    constructor(array) {
        this.allSides = array;
    }

    get countSides() {
        return this.allSides.length;
    }

    get perimeter() {
        return this.allSides.reduce(function(total, current) {
            return total = current + total;
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        let [a, b, c] = this.allSides;

        if (((a + b) > c) && ((c + b) > a) && ((a + c) > b)) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let [a, b, c, d] = this.allSides;

        if ((a == b) && (b == c) && (c==d)) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        let [a, b, c, d] = this.allSides;

        if (this.isValid) {
            return a ** 2;
        }
    }
}


// for ( let i = 0; i < array.length; i++ ) {
//     this[`side${i}`] = array[i];