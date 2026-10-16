function analyzeStudent(name, m1, m2, m3) {
    var total = m1 + m2 + m3
    var average = total / 3
    return `${name} scored total ${total} with average ${average}`
};

console.log(analyzeStudent("ABC", 100, 100, 100));
console.log(analyzeStudent("pqr", 38, 59, 74));
