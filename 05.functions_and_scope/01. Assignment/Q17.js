function calculateFinalPrice(price, discountPercent) {
    var finalPrice = price - (price * discountPercent / 100)
    return finalPrice
};
console.log(calculateFinalPrice(2500, 15));
console.log(calculateFinalPrice(1200, 10));
