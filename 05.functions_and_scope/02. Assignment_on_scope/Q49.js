var color = "Blue";
function changeColor() {
    var color = "Red";
    console.log("Inside:", color);
}
changeColor();
console.log("Outside:", color);

// Output
// Inside Red
// Outside Blue
