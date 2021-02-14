// Your code here
class Polygon {
    constructor (arr){
        this.sides = arr
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let answer = (el, value) => el + value
        return this.sides.reduce(answer)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
            if (this.countSides > 3){
                return false
            }else if(side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2){
                return true
        }else{
            return false
        }
    }
}

class Square extends Polygon{
    get isValid() {
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        if(this.countSides > 4){
            return false
        }else if(side1 == side2 && side1 == side3 && side1 == side4){
            return true
        }else{
            return false
        }
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}