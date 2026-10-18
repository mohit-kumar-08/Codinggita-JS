let arr = [32, 28, 41, 19, 35, 27, 38];
let count = 0;

for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 30) {
        count += 1
    }
};
console.log(count);
