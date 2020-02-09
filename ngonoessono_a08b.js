/*Gertrude Vanessa Ngono Essono
ngonoessono_a08b.js
INFO2124
Thoendel
02/6/2020*/

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */

const MathUtility = {
    getAreaOfCircle(r){ //r represents the radius//
        A =  Math.PI * r *r; //formula of the area of a circle//
        return A;
    },
    getAreaOfSquare( s){ //s represents the length of one side//
        A = s * s; //formula of the area of a square/
        return A;
    },
    getAreaOfTriangle(b, h){//h is the height and b is the base//
        A = h*b/2; //formula of the area of a triangle/
        return A;

    }
}

/* AND THIS LINE */

//Test code
const outMsg = 
`
The area of a circle that is has a radius of 5 units is ${MathUtility.getAreaOfCircle(5)} units.
The area of a square whose side measures 13 units is ${MathUtility.getAreaOfSquare(13)} units.
The area of a triangle with a base of 3 units and height of 2 units is ${MathUtility.getAreaOfTriangle(3, 2)} units.

`
console.log(outMsg);