function parent() {
    var a = "Parent";
    function child() {
        var b = "Child";
        function grandchild() {
            var c = "Grandchild";
            console.log(a);
            console.log(b);
            console.log(c);
        }
        grandchild();
    }
    child();
}
parent();

// Output
// Parent
// Child
// Grandchild

// All the values are accessed by scope chain
