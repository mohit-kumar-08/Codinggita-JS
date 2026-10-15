var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test();
console.log(number);

// Output
// 25
// 15
// The value of global scope is not changing as instead of reassigning a new variable, we are creating a new variable inside the function.
