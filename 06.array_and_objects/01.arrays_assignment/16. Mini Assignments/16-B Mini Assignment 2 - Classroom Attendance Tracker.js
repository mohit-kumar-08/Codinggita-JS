const attendance = [
    ["Jenil", ["P", "P", "A", "P", "P"]],
    ["Mahir", ["P", "A", "P", "P", "A"]],
    ["Yashvi", ["P", "P", "P", "P", "P"]],
    ["Arjun", ["A", "A", "P", "P", "A"]]
];

for (const student of attendance) {
    let presentCount = 0;
    let absentCount = 0;
    let status = "";

    for (let i = 0; i < 5; i++) {
        if (student[1][i] == "P") {
            presentCount += 1
        } else {
            absentCount += 1
        };
    };

    let attendancePercentage = (presentCount / (presentCount + absentCount)) * 100;

    if (attendancePercentage >= 75) {
        status = "Good";
    } else {
        status = "Low Attendance";
    };

    console.log(`Name: ${student[0]}`);
    console.log(`Present: ${presentCount}`);
    console.log(`Absent: ${absentCount}`);
    console.log(`Attendance: ${attendancePercentage}%`)
    console.log(`Status: ${status}`)
    console.log()
};
