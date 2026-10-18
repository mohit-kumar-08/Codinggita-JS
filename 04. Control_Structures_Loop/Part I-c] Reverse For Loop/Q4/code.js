let string = "Programming"
let result = ""

for (let i = string.length - 1; i >= 0; i--) {
    if (string[i].toLowerCase() != ("a" || "e" || "i" || "o" || "u")) {
        result += string[i]
    }
};
console.log(result);
