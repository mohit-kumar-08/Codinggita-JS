function createMessage() {
    var greeting = "Hello";
    function show() {
        console.log(greeting + " students");
    }
    return show;
}
var messageFunc = createMessage();
messageFunc();

// Output
// Hello students
