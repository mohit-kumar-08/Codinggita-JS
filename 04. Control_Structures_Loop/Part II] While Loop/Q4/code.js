let number = 58372;
let count = 0;

while (number > 0) {
    count += 1
    number = number / 10
    number = Math.floor(number)
};
console.log(count);
