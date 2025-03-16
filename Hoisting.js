/**
 * Basic examples to understand hoisting in JS 
 * Hoisting with var / let/ const
 * @author Maheen Nasir
 */
let getName = () => {
    console.log("My name is Maheen");
}

console.log(x);
var x = 2;

getName();

//Above exmaple will throw error! why?
//Lets understand
// In JavaScript, hoisting refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.
// However, the way variables are hoisted depends on whether they are declared using var, let, or const.

/********************************************************** */
// var Declarations:
// Variables declared with var are hoisted and initialized with undefined.
// This means you can reference a var variable before its declaration, but it will have the value undefined at that point.
// Example:

console.log(x); // Output: undefined
var x = 2;

//In this case, the declaration of x is hoisted to the top, but its assignment (x = 2) is not. Therefore, when console.log(x) is executed, x exists but is undefined.


/********************************************************** */
//let and const Declarations:
//Variables declared with let and const are also hoisted, but unlike var, they are not initialized during hoisting.
//Accessing them before their declaration results in a ReferenceError due to the Temporal Dead Zone (TDZ)—the period between the entering of the scope and the actual declaration where the variable cannot be accessed.
//Example:

console.log(y); // Throws ReferenceError: Cannot access 'y' before initialization
let y = 2;

// Here, although the declaration of y is hoisted, it remains uninitialized until the let y = 2; statement is executed.
// Accessing y before this line results in a ReferenceError.

/********************************************************** */
// Function Declarations:
// Function declarations are fully hoisted, meaning both the function's name and its implementation are moved to the top of their scope.
// This allows functions to be called before they appear in the code.
//Example:

sayHello(); // Output: Hello!

function sayHello() {
    console.log("Hello!");
}

/********************************************************** */
//Arrow Functions and Function Expressions:
//When functions are assigned to variables declared with let or const, they are not hoisted in the same way. Accessing them before their declaration will result in a ReferenceError.

sayHello2(); // Throws ReferenceError: Cannot access 'sayHello' before initialization
const sayHello2 = () => {
    console.log("Hello!");
};
//In this scenario, sayHello is in the Temporal Dead Zone and cannot be accessed before its declaration.