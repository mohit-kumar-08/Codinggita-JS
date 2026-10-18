var x = "global";
function first() {
    var x = "first";
    function second() {
        console.log(x);
    }
    second();
}
first();
console.log(x);

// Output
// first
// global

// The value of x changes depending on the location of console.log due to scope chain.
