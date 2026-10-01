let cartTotal = 100;
let discountPercentage;
console.log(cartTotal >= 5000 ? discountPercentage = 20 : cartTotal >= 2000 ? discountPercentage = 10 : cartTotal >= 1000 ? discountPercentage = 5 : discountPercentage = 0);
let finalPayableAmount = cartTotal - (cartTotal * discountPercentage /100);
console.log(`The Final payable amount after adding a discount of ${discountPercentage}% is Rs. ${finalPayableAmount}`);
