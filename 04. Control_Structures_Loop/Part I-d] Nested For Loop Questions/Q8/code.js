for (i = 5; i >= 1; i--) {
    bag = ""
    for (j = 1; j <= i; j++) {
        if (i == 4 && (j == 2 || j == 3)) {
            bag += " " + " "
        } else if (i == 3 && j == 2) {
            bag += " " + " "
        } else {
            bag += "*" + " "
        }
    }
    console.log(bag)
};
