display();
function display() {
    console.log("Function is hoisted completely");
}

// Output
// Function is hoisted completely

// If we had declared normal var variable instead of the function, then the output would have been `undefined`
