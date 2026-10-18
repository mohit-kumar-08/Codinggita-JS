console.log(typeof myFunc);
function myFunc() {
    return "I am hoisted";
}
console.log(myFunc());

// Output
// function
// I am hoisted