function test() {
    x = 100; // missing var
}
test();
console.log(x);

// The value of x is accessible outside the function which should not have happend.

// It happend because we didn't used any declaration keyword like var, let or const.
