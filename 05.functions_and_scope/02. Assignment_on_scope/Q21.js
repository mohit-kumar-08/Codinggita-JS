for (var number = 2; number <= 6; number += 2) {
    console.log(number);
}
console.log("Final:", number);

// Output
// 2
// 4
// 6
// Final: 6
// var is a functioned-scope and not block-scope, that's why we can access it's value outside of loop.
