let units = 1;
let electricityBill = 0;

if (units <= 50) {
    electricityBill = units * 2
} else if (units <= 150) {
    electricityBill = units * 4
} else {
    electricityBill = units * 6
};

console.log(electricityBill);
