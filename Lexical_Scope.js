// // Lexical scope (static state) in javaScript is a concept to determine the physical sturcture and scope of variable
// // current scope finds from its imidiate and parent and a scope of chain gets formed.

console.log("a", a) //Undefined because its in memory of GEC where it is defined but value is not initialized yet

function b() {
    function c() {
        console.log("second", a) //Logs 2
    }
    return c();
}

var a = 2;
b();

// //********************************************************************* */

function outer() {
    let outerVar = "I'm an outer variable";

    function inner() {
        let innerVar = "I'm an inner variable";
        console.log(outerVar);  // Accessing outer function's variable
    }

    inner();
}

outer();  // Output: "I'm an outer variable"

//***************************************************************************** */

//Shadowing & scope with var
//var can update the value outside the scope

var a = 200;
{
    var a = 10;
    var b = 20;
    var c = 30;
    console.log(a); // 10
    console.log(b); //20
    console.log(c); //30

}
console.log(a); //10 :D Amazed right? its because var has a is shadowed and also modified the value of a outside of its scope and refers to same memory space ().
console.log(b); //20
console.log(c); //30
//***************************************************************************** */
//Shadowing & scope with let
//var can update the value outside the scope

 let a = 200;
{
    let a = 10;
    let b = 20;
    let c = 30;
    console.log(a); // 10
    console.log(b); //20
    console.log(c); //30

}
console.log(a); //200 because a different scope in case of let and same goes for const
// console.log(b); // undefined
// console.log(c); // undefined