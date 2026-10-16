//a)
// No, a function expression can't be called brfore it is defined.

//b)
function outer(number1, number2) {
    function inner() {
        return (number1 + number2) / 14
    };
    return inner()
};
console.log(outer(12,13));
