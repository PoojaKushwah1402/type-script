"use strict";
exports.__esModule = true;
var mess = 'hello Pooja';
// console.log(mess)
var x = true;
var y = 0;
var s = 'Pooja';
var n = undefined;
var u = null;
var sentence = "My name is ".concat(s, " \nand I'm new to typescript");
var str = null;
var newb = undefined;
//syntax for declaring array:
var l1 = [1, 2, 3];
var l2 = [1, 2, 3];
var misL = [2, 'pooja', 4]; //disadvantage is size is fixed and 
//also sequence is also fixed
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c1 = Color.green;
var Name;
(function (Name) {
    Name[Name["Pk"] = 0] = "Pk";
    Name[Name["GK"] = 8] = "GK";
    Name[Name["SK"] = 9] = "SK";
})(Name || (Name = {}));
var N1 = Name.SK;
console.log(c1, N1);
//console.log(sentence,n,u)
//any type value, used when we are not sure of type.
var anyValue = 'pooja';
/*
Variable type :
let x = true;
let y =0;
let s = 'str'

these can be defined with the types as well:
let x: boolean = true;
let y: number =0;
let s: string = 'str'
let n: null = null;
let u: undefined = undefined

Why we need types:
1: to avoid setting the wrong values.
2: Itelligence, i.e it will provide/advise the methods related to that type

*****************************************************

Type inference :
let b= 20;
b=true;

when we initialize the variable at the time of declaration. then typescript infered that variable
that means it assign the type to that variable of type to which the value is assigned
that is static type checking.
 type inference takes place only at initialising variables

Union types:

let multitype : number | boolean;
multitype = 20;
multitype = true;

union of types is usefull when value is not in our control.
eg. api data or user input.

instead of any type union is usefull due to :
1. union has some restrictions where as any does not have any restriction
2. intellisence any does not provide any intellisecse, whereas union provides
*/
var multitype;
multitype = 20;
//multitype = true;
