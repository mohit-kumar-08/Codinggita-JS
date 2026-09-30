let operator= "**";
let num1 = 338;
let num2 = 398;
switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        switch (num2) {
            case 0:
                console.log(0);
                break;
            default:
                console.log(num1 / num2);
        }
        break;
    case "%":
        console.log(num1 % num2)
        break;
    case "**":
        console.log(num1 ** num2)
        break;
    default:
        console.log("Unsupported!")
};
