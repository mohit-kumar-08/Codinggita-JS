function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
student();
console.log(marks);

// The statement `console.log(marks);` cause an error as marks is a local scope so it can't be called outside the function.

// Output
// 60
// 70
// 80
// 90
// Error
