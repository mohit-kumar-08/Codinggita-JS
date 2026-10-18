let arr = [12, 18, 25, 15, 30, 17, 22];
let result = [];

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 18) {
        continue
    }
    result.push(arr[i]);
};
console.log(result);
