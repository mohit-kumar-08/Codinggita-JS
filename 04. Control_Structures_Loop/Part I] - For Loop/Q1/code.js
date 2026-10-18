let arr = [28, 32, 25, 40, 18, 35];
let count = 0;
for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > 30) {
        count += 1
    }
}
console.log(count);
