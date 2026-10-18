let arr = [12, 45, 7, 23, 56, 89, 34];
let largestNumber = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > largestNumber) {
        if (arr[i] < 50 && arr[i] > arr[i - 1]) {
            largestNumber = arr[i]
        }
    }
};
console.log(largestNumber)
