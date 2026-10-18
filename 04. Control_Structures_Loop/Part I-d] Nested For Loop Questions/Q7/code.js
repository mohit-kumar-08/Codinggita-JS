let number = 15;
for (let i = 5; i >= 1; i--) {
    bag = ""
    for (let j = 1; j <= i; j++) {
        bag += number + " "
        number -= 1
    }
    console.log(bag)
};
