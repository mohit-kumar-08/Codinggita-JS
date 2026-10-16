var calculateGrade = function(studentPercentage) {
    if (studentPercentage >= 90) {
        return "A+"
    } else if (studentPercentage >= 80) {
        return "A"
    } else if (studentPercentage >= 70) {
        return "B"
    } else if (studentPercentage >= 60) {
        return "C"
    } else if (studentPercentage >= 40) {
        return "D"
    } else {
        return "F"
    }
};

console.log(calculateGrade(95));
console.log(calculateGrade(82));
console.log(calculateGrade(67));
console.log(calculateGrade(45));
console.log(calculateGrade(32));
