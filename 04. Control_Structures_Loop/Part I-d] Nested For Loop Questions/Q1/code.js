number = 1
for (let i = 1; i <= 4; i++) {
    bag = ""
    for (let j = 1; j <= i; j++) {
        bag += number + " "
        number += 1
    }
    console.log(bag)
};
