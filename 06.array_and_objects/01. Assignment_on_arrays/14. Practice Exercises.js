//1.
// const numbers = [12, 7, 18, 25, 4, 9, 30];
// for (const number of numbers) {
//     if (number % 2 == 0) {
//         console.log(number)
//     };
// };

//2.
// const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];
// for (const city of cities) {
//     cityName = ""
//     for (let i = city.length - 1; i >= 0; i--) {
//         cityName += city[i]
//     };
//     console.log(cityName);
// };

//3.
// const scores = [12, 45, 7, 89, 23];
// let largest = -Infinity;
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > largest) largest = scores[i]
// };
// let secondLargest = -Infinity;
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > secondLargest && scores[i] < largest) secondLargest = scores[i]
// };
// console.log(secondLargest)

//4.
// const colors = ["Red", "Blue", "Green", "Yellow"];
// colors.push("Purple");
// colors.unshift("Black");
// console.log(colors);

//5.
// const matrix = [
//     [10, 20, 30],
//     [40, 50, 60]
// ];
// sumOfElement = 0;
// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 3; j++) {
//         sumOfElement += matrix[i][j]
//     };
// };
// console.log(sumOfElement);


//6.
// const marks = [45, 67, 89, 32, 76, 91, 54];
// count = 0
// for (let mark of marks) {
//     if (mark > 50) {
//         count += 1
//     };
// };
// console.log(count);

//7.
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//         if (i == j) {
//             console.log(matrix[i][j])
//         };
//     };
// };
