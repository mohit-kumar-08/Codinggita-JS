for (let i = 1; i <= 50; i++) {
    if (i > 20 && Number.isInteger(i ** (1/2))) {
        break
    } else {
        console.log(i)
    }
};
