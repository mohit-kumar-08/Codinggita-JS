//a) local scope are the variables declared inside the function whereas, global scope are the variables which are declared outside the functions.

//b)
function displayAge() {
    let age = 20
    console.log(age)
}
console.log(age);
displayAge()

var course = "JavaScript"
function coursePrint() {
    console.log(course)
};
coursePrint()