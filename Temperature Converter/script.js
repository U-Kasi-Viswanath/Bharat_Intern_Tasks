document.getElementById('celsiusToFahrenheit').addEventListener('click', () => convertTemperature('celsius', 'fahrenheit'));
document.getElementById('fahrenheitToCelsius').addEventListener('click', () => convertTemperature('fahrenheit', 'celsius'));
document.getElementById('celsiusToKelvin').addEventListener('click', () => convertTemperature('celsius', 'kelvin'));
document.getElementById('kelvinToCelsius').addEventListener('click', () => convertTemperature('kelvin', 'celsius'));
document.getElementById('fahrenheitToKelvin').addEventListener('click', () => convertTemperature('fahrenheit', 'kelvin'));
document.getElementById('kelvinToFahrenheit').addEventListener('click', () => convertTemperature('kelvin', 'fahrenheit'));

function convertTemperature(fromUnit, toUnit) {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const resultElement = document.getElementById('result');
    let result;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (inputTemp * 9/5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (inputTemp - 32) * 5/9;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = inputTemp + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = inputTemp - 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = (inputTemp - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = (inputTemp - 273.15) * 9/5 + 32;
    }

    resultElement.textContent = `Converted temperature: ${result.toFixed(2)} ${toUnit}`;
}
