function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
console.log(i);
calculate();

//The error is because of the statement `console.log(i)` because i is a local scope and it can't be called outside the function.
