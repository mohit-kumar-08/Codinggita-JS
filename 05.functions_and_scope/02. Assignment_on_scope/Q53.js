function outer() {
    var secret = "Hidden";
    function inner() {
        console.log(secret);
    }
}
inner();
outer();

// The error is because of calling of inner() on global level. it should have been called inside outer().

// Due to scope.
