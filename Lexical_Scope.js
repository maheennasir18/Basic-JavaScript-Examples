// Lexical scope (state)in javaScript is a concept to determine the physical sturcture and scope of variable
// current scope finds from its imidiate and parent and a scope of chain gets formed.

console.log("a", a) //Undefined because its in memory of GEC where it is defined but value is not initialized yet

function b() {
    function c() {
        console.log("second", a) //Logs 2
    }
    return c();
}

var a = 2;
b();

//********************************************************************* */

function outer() {
    let outerVar = "I'm an outer variable";

    function inner() {
        let innerVar = "I'm an inner variable";
        console.log(outerVar);  // Accessing outer function's variable
    }

    inner();
}

outer();  // Output: "I'm an outer variable"
