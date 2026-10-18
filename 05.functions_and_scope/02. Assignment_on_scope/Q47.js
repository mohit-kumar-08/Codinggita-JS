var name = "Global Name";
function show() {
    var name = "Local Name";
    console.log(name);
}
show();
console.log(name);

// Output
// Local Name
// Global Name

// No, because the local name valued name in functional block and can't be called outside of the functional block
