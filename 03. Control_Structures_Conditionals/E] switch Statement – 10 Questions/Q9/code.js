let date = 17;

switch (true) {
    case (1 <= date && date <= 10):
        console.log("Beginning of the month");
        break;
    case (date >= 11 && date <= 20):
        console.log("Middle of the month");
        break;
    case (21 <= date && date <= 31):
        console.log("End of the month");
        break;
    default:
        console.log("Invalid Date!");
};
