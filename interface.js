"use strict";
exports.__esModule = true;
//when we are having huge object containe many values the it is difficult 
//to specify type in function declaration
function fullname(person) {
    console.log("full name is ".concat(person.fname, " ").concat(person.lname));
}
var p = {
    fname: 'Pooja'
};
//So now function defination would be like
function fullnamewithInterface(person) {
    console.log("full name is ".concat(person.fname, " ").concat(person.lname));
}
fullnamewithInterface(p);
