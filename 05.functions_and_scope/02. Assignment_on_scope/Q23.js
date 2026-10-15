var i = 5;
while (i > 2) {
    console.log(i);
    i--;
}
console.log("After loop:", i);

// Output
// 5
// 4
// 3
// After loop: 2
// Yes, i is accessible after the loop as it is declared using var which is a functional-scope
