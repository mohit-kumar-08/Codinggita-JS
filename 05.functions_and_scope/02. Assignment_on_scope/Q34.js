function calculate() {
    console.log(total);
    var total = 50;
    console.log(total);
}
calculate();

// Output
// undefined
// 50

//
function calculate() {
    var total;
    console.log(total);
    var total = 50;
    console.log(total);
}
calculate();