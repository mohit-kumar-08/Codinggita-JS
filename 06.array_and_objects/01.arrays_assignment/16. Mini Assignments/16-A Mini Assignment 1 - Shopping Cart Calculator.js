const cart = [
    ["Laptop", 45000, 1],
    ["Mouse", 800, 2],
    ["Keyboard", 1500, 1],
    ["Headphones", 2500, 1]
];
let cartTotalPrice = 0;

for (const item of cart) {
    console.log(`Product: ${item[0]}`);
    console.log(`Price: ${item[1]}`);
    console.log(`Quantity: ${item[2]}`);
    console.log(`Item Total: ${item[1] * item[2]}`);
    console.log();
    cartTotalPrice += item[1] * item[2];
};
console.log();
console.log(`Grand Total: ${cartTotalPrice}`);
console.log();
if (cartTotalPrice > 50000) {
    cartTotalPrice -= cartTotalPrice / 10
    console.log(`Final Payable Price: ${cartTotalPrice}`)
};
