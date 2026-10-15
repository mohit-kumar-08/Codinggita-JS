var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
console.log(message);

// Output
// statement `console.log(message)` cause an error as `message` is a local scope and we can't call it outside of the fuction.