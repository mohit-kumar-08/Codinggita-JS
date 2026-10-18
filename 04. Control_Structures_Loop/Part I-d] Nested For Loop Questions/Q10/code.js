for (let i = 1; i <= 5; i++) {
    bag = ""
    for (let j = 1; j <= 5; j++) {
        if ((i * j) % 2 == 0 ) {
            bag += i * j + " "
        } else {
            bag += " " + " "
        }
    }
    console.log(bag)
};
