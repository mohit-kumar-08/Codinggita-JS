var globalVar = "I am global";
function outer() {
    var outerVar = "I am outer";
    function inner() {
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar); // this line
    }
    inner();
}
outer();

// First Compiler will look for globalVar value which it will found in neither inner function nor outer function, so it will look for the value in the global scope and will found the value and will return it.
// Then it will look for outerVar value which it will not find in inner function, so it will leave this funtion and search for the value in the outer function, which is outer function and it will found the value of outerVar there and will return it.
// Then it will look for value of variable innerVar which it will find in inner function only and wil return it.
// This lookup process of js is called scope chain
