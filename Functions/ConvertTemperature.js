// Function to convert temperature
function convertTemperature(value, unit) {
    switch (unit) {
        case 'C':
            if (value < 0 || value > 100) {
                console.log("Temperature out of valid range (0°C - 100°C).");
                return;
            }
            console.log(`${value}°C is ${(value * 9/5) + 32}°F`);
            break;
        case 'F':
            if (value < 32 || value > 212) {
                console.log("Temperature out of valid range (32°F - 212°F).");
                return;
            }
            console.log(`${value}°F is ${(value - 32) * 5/9}°C`);
            break;
        default:
            console.log("Invalid unit! Use 'C' for Celsius or 'F' for Fahrenheit.");
    }
}

convertTemperature(25, 'C'); // 25°C to °F
convertTemperature(77, 'F'); // 77°F to °C