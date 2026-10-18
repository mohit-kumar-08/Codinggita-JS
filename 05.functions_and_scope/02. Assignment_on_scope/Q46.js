var score = 50;
function test() {
    var score = 90;
    console.log(score);
}
test();
console.log(score);

// 90
//50

//"shadowing" means that the score = 90 value is returning instead of score = 50 value in local scope.
