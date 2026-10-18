const prompt = require("prompt-sync")();
let password = "admin123";
for (let i = 1; i <= 5; i++) {
    let userPassword = prompt("Enter Password: ")
    if (password == userPassword) {
        console.log("Access Granted")
        break;
    }
    if (i == 5) {
        console.log("Account locked")
    };
};
