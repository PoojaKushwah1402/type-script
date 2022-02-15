//Function is ts;
//Parameter in fu8nctions implicitly has an 'any' type,
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(2, 3));
//you can also redine the type of return type of functions.
function sub(n1, n2) {
    return n1 - n2;
}
//In ts parameters are not optional but we can make them by adding ? 
//If we want to make the first parameter as optional then we sould have to switch the order
function mult(n1, n2) {
    if (n2)
        return n1 * n2;
    else
        return n1 * n2;
}
//Default parameters
function mult1(n1, n2) {
    if (n2 === void 0) { n2 = 20; }
    return n1 * n2;
}
