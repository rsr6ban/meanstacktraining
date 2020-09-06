let i1=Number(prompt("Enter first value"))
let i2=Number(prompt("Enter second value"))
//local variable
function addno(num1:number,num2:number) {
    return num1+num2
}
//calling
let addition:number=addno(i1,i2)
console.log("The result of input of addition is", addition)

function circle(num1:number) {
    return 3.14*num1*num1
}
//calling
let circlearea:number=circle(i1)
console.log("The result of input i1 = R of circle Area is", circlearea)

function square(num1:number) {
    return num1*num1
}
//calling
let squarearea:number=square(i1)
console.log("The result of input of square Area is", squarearea)

function rectangle(num1:number,num2:number) {
    return num1*num2
}
//calling
let rectanglearea:number=rectangle(i1,i2)
console.log("The result of input of rectangle Area is", rectanglearea)

function triangle(num1:number,num2:number) {
    return 0.5*num1*num2
}
//calling
let trianglearea:number=triangle(i1,i2)
console.log("The result of input of triangle Area is", trianglearea)