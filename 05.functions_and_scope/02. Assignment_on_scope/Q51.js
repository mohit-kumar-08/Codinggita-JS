function outer() {
    var teacher = "Kartik Sir";
    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }
    inner();
}
outer();

// Output
// Jenil
// Kartik Sir

// No, because both variable are declared in local scope and so they can't be accessed in global scope.
