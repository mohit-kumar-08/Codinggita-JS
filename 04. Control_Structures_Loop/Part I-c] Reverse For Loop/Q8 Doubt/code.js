let number = 13;
let binaryExpressionOfNumber = "";
let reverseOfBinary = ""
while (number / 2 > 0) {
    binaryExpressionOfNumber += number % 2
};

for (let i = binaryExpressionOfNumber.length - 1; i >= 0; i--) {
    reverseOfBinary += binaryExpressionOfNumber[i]
};
console.log(reverseOfBinary);
