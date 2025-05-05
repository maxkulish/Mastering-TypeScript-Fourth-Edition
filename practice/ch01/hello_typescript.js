"use strict";
var version = "es6";
console.log(`Hello, TypeScript!`);
console.log(`hello ${version} TypeScript`);
var myString = `this is a string`;
var myBoolean = true;
var myNumber = 42;
var myStringArray = ["apple", "banana", "cherry"];
myBoolean = myNumber === 456;
myStringArray = [myNumber.toString(), `5678`];
myStringArray.push(`91011`);
console.log(myStringArray);
console.log(myStringArray.length);
console.log(myStringArray[0]);
var inferedString = "this is a string";
var inferredNumber = 42;
var nameIdObject = { name: "myName", id: 1, print() { } };
console.log(nameIdObject);
nameIdObject = { id: 2, name: "someName", print() { } };
/**
 * Calculates the result of (a * b) + c and logs it to the console.
 *
 * @param a - The first number to multiply.
 * @param b - The second number to multiply.
 * @param c - The number to add to the product of a and b.
 */
function calculate(a, b, c) {
    console.log(a * b + c);
}
console.log(calculate(1, 2, 3));
var item1 = { id: 1, name: "item1", price: 10 };
var item2 = { id: 2, name: "item2", price: 20 };
item1 = { id: 2 };
console.log(item1);
console.log(item2);
//# sourceMappingURL=hello_typescript.js.map