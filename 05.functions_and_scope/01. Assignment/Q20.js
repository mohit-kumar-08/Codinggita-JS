//1.
function processStudent(name, m1, m2, m3) {
    function total() {
        return m1 + m2 + m3
    }

    function average() {
        return total() / 3
    };

    if (average >= 35) {
        let result = "Pass"
    }; else {
        let result = "Fail"
    };
    return `Name: ${name}
Total: ${total()}
Average: ${average()}
Result: ${result}`
};

//2.
console.log(processStudent("abd", 38, 48, 27));
console.log(processStudent("rhf", 62, 74, 28));
console.log(processStudent("kdf", 75, 65, 64));

//3.
function compareAverage(avg1, avg2){
    if (avg1 > avg2) {
        return `${avg1} is greater than ${avg2}`
    } else if (avg2 > avg1) {
        return `${avg2} is greater than ${avg1}`
    } else {
        return `Both averages are equal.`
    }
}
