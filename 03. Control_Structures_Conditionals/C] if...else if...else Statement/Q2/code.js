let income = 850000;
if (0 <= income < 300000) {
    taxOnIncome = 0
} else if (income <= 70000) {
    taxOnIncome = income * 5 /100
} else if (income <= 1000000) {
    taxOnIncome = income * 10 / 100
} else {
    taxOnIncome = income * 15 / 100
};
console.log(taxOnIncome);
