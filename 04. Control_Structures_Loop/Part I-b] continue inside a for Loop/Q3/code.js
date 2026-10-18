let string = "Hello World";
let result = "";

for (i = 0; i <= string.length - 1; i++) {
    if (string[i] == " ") {
        continue
    }
    result += string[i]
};
console.log(result);
