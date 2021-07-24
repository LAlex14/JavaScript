//! Functions

//* function declaration is hoisted before var declaration

{ (function () { }()) && (function () { })() } //* IIFE syntax

function foo() { }              //* function declaration
var foo = function bar() { }    //* named function expression   (function bar() {})
var foo = function () { }       //* anonymous function expression

//! Constructor

new Function(arg1, arg2, ...argN, functionBody) // not recomanded
var multiply = new Function('x', 'y', 'return x * y');

new GeneratorFunction(arg1, arg2, ...argN, functionBody) // not recomanded

