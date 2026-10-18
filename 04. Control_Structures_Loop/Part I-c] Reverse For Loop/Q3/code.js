let number = "4729";
let product = 1;

for (let i = 1; i <= number.length - 1; i++) {
    if (number[i] % 2 != 0) {
        product *= number[i]
    }
};
console.log(product);
