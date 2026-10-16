function generateReport(name, m1, m2, m3) {
    var totalMarks = m1 + m2 + m3
    var average = totalMarks / 3
    if (average >= 40) {
        var result = "Pass"
    } else {
        var result = "Fail"
    }
    return `Student Name: ${name}
Total Marks: ${totalMarks}
Average: ${average}
Result: ${average}`
};
console.log(generateReport("pqr", 36, 46, 57));
console.log(generateReport("PQR", 98, 95, 99));
