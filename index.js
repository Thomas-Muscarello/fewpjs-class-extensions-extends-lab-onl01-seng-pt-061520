class Polygon {
    constructor(sides) {
        //Define a Polygon class. Polygon will accept an Array of integers as a parameter, which will represent each side of a shape.
      this.sides = sides
    }
  
    get countSides() {
        //Use the get keyword to make a getter method countSides that counts the number of sides (each index in the array).
      return this.sides.length
    }
  
    get perimeter(){
        //Use the get keyword to make a getter method perimeter that calculates the sum of each side (each index in the array) of the polygon. This method will become accessible to its child classes.
      return this.sides.reduce((total, i) => total + i)
    }
  }
  
  class Triangle extends Polygon {
      //Define a Triangle class that inherits from Polygon
    get isValid(){
        //Use the get keyword to make a getter method isValid that checks if the given 3 sides for a triangle is valid.
      const [a,b,c] = this.sides
      if (a + b <= c || a + c <= b || b + c <= a){
        return false
      } else {
        return true
      }
    }
  }
  
  class Square extends Polygon {
      //Define a Square class that inherits from Polygon
    get isValid(){
        //Use the get keyword to make a getter method isValid that checks if the given 4 sides for a square is valid. A square is valid when the lengths of all sides are equal.
      const [a,b,c,d] = this.sides
      if (a === b && b === c && c === d) {
        return true
      } else {
        return false
      }
    }
  
    get area() {
        //Use the get keyword to make a getter method area that calculates the area of the square.
      return this.sides[0] * this.sides[0]
    }
  }