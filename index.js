class Polygon {
    constructor(arr) {
        this.sides = arr;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce(function(acc, curr) {
            return acc + curr;
        });
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides[0] + this.sides[1] < this.sides[2]) {
            return false;
        } else if (this.sides[1] + this.sides[2] < this.sides[0]) {
            return false;
        } else if (this.sides[0] + this.sides[2] < this.sides[1]) {
            return false;
        } else {
            return true;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        return this.sides.every(side => side === this.sides[0])
    }

    get area() {
        return this.sides[0] * this.sides[0];
    }
}