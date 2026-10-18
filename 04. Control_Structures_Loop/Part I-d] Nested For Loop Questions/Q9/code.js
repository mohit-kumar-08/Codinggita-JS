for (let i = 1; i <= 5; i++) {
    bag = ""
    for (let j = 1; j <= 5; j++) {
        if (i == j) {
            bag += " " + " "
        } else {
            bag += "*" + " "
        }
    }
    console.log(bag)
};
