var value = 10;
function update() {
    value = 20;          // no var
    console.log(value);
}
update();
console.log(value);

// Output
// 20
// 20

// in the previous question, variable shadowing was occuring whereas in this question, value updation is occuring.
