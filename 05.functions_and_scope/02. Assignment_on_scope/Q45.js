var a = 1;
function level1() {
    var b = 2;
    function level2() {
        var c = 3;
        function level3() {
            var d = 4;
            console.log(a)
            console.log(b)
            console.log(c)
            console.log(d)
        }
        level3();
    }
    level2();
}
level1();