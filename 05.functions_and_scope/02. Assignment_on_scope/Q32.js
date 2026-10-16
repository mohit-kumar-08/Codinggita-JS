var a = 10;
function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}
test();

// The first console.log() dosen't print the global value of a because a new local scope variable is defined in the function.