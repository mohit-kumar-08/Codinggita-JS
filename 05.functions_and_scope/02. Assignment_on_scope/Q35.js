var price = 100;
function showPrice() {
    console.log(price);
    var price = 500;
}
showPrice();
console.log(price);

// Inside the function, the variable is declared after the print statement.
// The re-declaration of variable inside the function is local-scope, by which, it can'tbe accessed outside of the function block

// first `console.log()` function print undefined
// final `console.log()` funtion print 100
// The hoisting make the first `console.log()` statement, print undefined instead of 100
