function convert() {

    const weightIn = document.getElementById('weightIn').value;
    const unitType = document.getElementById('unitType').value;
    const resultElement = document.getElementById('result');


    if (weightIn === '') {
        resultElement.textContent = 'Please enter a value to convert.';
        return;
    }

    let result;

    if (unitType === 'k2p') {
        result = weightIn * 2.2046;
        resultElement.textContent = `${result.toFixed(2)} pounds.`;
    } else if (unitType === 'p2k') {
        result = weightIn * 0.4536;
        resultElement.textContent = `${result.toFixed(2)} kilograms.`;
    }
}
