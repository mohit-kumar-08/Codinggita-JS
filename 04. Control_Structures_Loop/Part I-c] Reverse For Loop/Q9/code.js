let arr = [90, 85, 70, 95, 60, 88, 75];
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > 80) {
        console.log(arr[i], i)
        break
    };
};
