//a) Hoisting works in functional declaration wereas it dosen't work in function expression

//b)
function studentResult(name, marks) {
    return `Student ${name} has scored ${marks} marks.`
};
console.log(studentResult("Mohit", 100));
console.log(studentResult("biey", 19));
