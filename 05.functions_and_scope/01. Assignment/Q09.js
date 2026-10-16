let calculateSimpleInterest = function(principal, rate, time) {
    let simpleInterest = (principal * rate * time) / 100
    return simpleInterest
};

console.log(calculateSimpleInterest(10000, 5, 2));
