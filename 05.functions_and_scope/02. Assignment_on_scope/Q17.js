var number = 1;
if (true) {
    var number = 2;
}
console.log(number);

// Output
// 2

// The output would have differ if as the variable is declared using `var` which is a functional scope
