let sum = 0;
let arr = [32, 42, 534, -52, -2187, 20, 0, -37, 7];

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] <= 0) {
        continue
    }
    sum += arr[i]
};
console.log(sum);
