"use strict";
var i1 = Number(prompt("Enter first value"));
var i2 = Number(prompt("Enter second value"));
//local variable
function addno(num1, num2) {
    return num1 + num2;
}
//calling
var addition = addno(i1, i2);
console.log("The result of input of addition is", addition);
function circle(num1) {
    return 3.14 * num1 * num1;
}
//calling
var circlearea = circle(i1);
console.log("The result of input i1 = R of circle Area is", circlearea);
function square(num1) {
    return num1 * num1;
}
//calling
var squarearea = square(i1);
console.log("The result of input of square Area is", squarearea);
function rectangle(num1, num2) {
    return num1 * num2;
}
//calling
var rectanglearea = rectangle(i1, i2);
console.log("The result of input of rectangle Area is", rectanglearea);
function triangle(num1, num2) {
    return 0.5 * num1 * num2;
}
//calling
var trianglearea = triangle(i1, i2);
console.log("The result of input of triangle Area is", trianglearea);
//# sourceMappingURL=Function.js.map