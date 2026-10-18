for (let i = 1; i <= 5; i++) {
    bag = ""
    for (let j = 1; j <= i; j++) {
        if (((i == 3 || i == 4) && j == 2)) {
            bag += " " + " "
        } else if (i == 4 && j == 3) {
            bag += " " + " "
        } else {
            bag += "*" + " "
        }
    }
    console.log(bag)
};
