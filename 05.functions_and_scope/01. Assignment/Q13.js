//a) A function inside another function is called a nested function.

//b)
function studentReport(name, m1, m2, m3) {
    function total() {
        var sum = m1 + m2 + m3
        return sum
    };
    return `${name} total marks: ${total()}`
};
console.log(studentReport("PQR", 93, 97, 98));
