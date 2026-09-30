let cartTotal = 1200;
let isPremiumMember = true;

if (cartTotal >= 1000) {
    if (isPremiumMember) {
        let finalAmount = cartTotal * 20 / 100
    } else {
        let finalAmount = cartTotal * 10 / 100
    }
};

console.log(finalAmount);
