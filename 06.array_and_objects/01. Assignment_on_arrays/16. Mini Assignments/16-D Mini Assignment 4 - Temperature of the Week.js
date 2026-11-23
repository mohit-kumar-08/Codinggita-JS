const temperatures = [
    ["Monday", 32],
    ["Tuesday", 35],
    ["Wednesday", 30],
    ["Thursday", 28],
    ["Friday", 33],
    ["Saturday", 36],
    ["Sunday", 31]
];

let highestTemperature = -Infinity;
let highestTemperatureDay ="";
let lowestTemperature = Infinity;
let lowestTemperatureDay ="";
let averageTemperature = 0;
let status = "";

for (const temperature of temperatures) {

    if (temperature[1] > highestTemperature) {
        highestTemperature = temperature[1]
        highestTemperatureDay = temperature[0]
    }

    if (temperature[1] < lowestTemperature) {
        lowestTemperature = temperature[1]
        lowestTemperatureDay = temperature[0]
    }

    averageTemperature += temperature[1]

    if (temperature[1] >= 35) {
        status = `Heat alert on ${temperature[0]}`
    } else {
        status = ""
    };

    console.log(`Day: ${temperature[0]}`)
    console.log(`Temperature: ${temperature[1]}`)
    console.log(status);
    console.log();
};

averageTemperature /= 7

console.log(`Highest Temperature: ${highestTemperature}`);
console.log(`Highest Temperature Day: ${highestTemperatureDay}`);
console.log(`Lowest Temperature: ${lowestTemperature}`);
console.log(`Lowest Temperature Day: ${lowestTemperatureDay}`);
console.log(`Average Temperature ${averageTemperature}`);
