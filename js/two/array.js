document.addEventListener("DOMContentLoaded", () => {    const seriesInput = document.getElementById("seriesInput");
    const maxOutput = document.getElementById("maxOutput");
    const minOutput = document.getElementById("minOutput");
    const sumOutput = document.getElementById("sumOutput");
    const avgOutput = document.getElementById("avgOutput");
    const reverseOutput = document.getElementById("reverseOutput");

    seriesInput.addEventListener("input", () => {
    const input = seriesInput.value;
    const numbers = input
        .split(",")
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num));

    if (numbers.length > 0) {
        const max = Math.max(...numbers);
        const min = Math.min(...numbers);
        const sum = numbers.reduce((a, b) => a + b, 0);
        const avg = sum / numbers.length;
        const reverse = numbers.slice().reverse();

        maxOutput.textContent = max;
        minOutput.textContent = min;
        sumOutput.textContent = sum;
        avgOutput.textContent = avg.toFixed(2);
        reverseOutput.textContent = reverse.join(", ");
    } else {
        maxOutput.textContent = "-";
        minOutput.textContent = "-";
        sumOutput.textContent = "-";
        avgOutput.textContent = "-";
        reverseOutput.textContent = "-";
    }
    });
});