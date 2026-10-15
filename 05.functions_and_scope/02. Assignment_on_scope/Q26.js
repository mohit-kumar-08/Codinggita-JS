function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number);
}
calculate();

// Output
// 10
// 20
// 30
// Final 4
// `number` variable is declared inside the function which make it a local scope, so it can't be call outside the function.
