var institute = "CodingGita";
function department() {
    var dept = "CSE";
    function batch() {
        var year = 2025;
        console.log(year);
        console.log(dept);
        console.log(institute);
    }
    batch();
}
department();

// Output
// 2025
// CSE
// institute

// First inside the batch function, compiler will look for value of variable year which it will find in batch function only and wil return it.
// Then it will look for dept value which it will not find in batch function, so it will leave this funtion and search for the value in the outer function, which is department function and it will found the value of dept there and will return it.
// The it will look for institute value which it will found in neither batch function nor department function, so it will look for the value in the global scope and will found the value and will return it.
// This lookup process of js is called scope chain
