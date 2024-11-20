document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById("textArea");
    const clearAll = document.getElementById("clearAll");
    const capitalize = document.getElementById("capitalize");
    const sort = document.getElementById("sort");
    const reverse = document.getElementById("reverse");
    const stripBlank = document.getElementById("stripBlank");
    const addNumbers = document.getElementById("addNumbers");
    const shuffle = document.getElementById("shuffle");
  
    let isUpperCase = false; // For toggle capitalization
  
    // Clear All
    clearAll.addEventListener("click", () => {
      textArea.value = "";
    });
  
    // Capitalize
    capitalize.addEventListener("click", () => {
      const lines = textArea.value.split("\n");
      textArea.value = lines
        .map(line => (isUpperCase ? line.toLowerCase() : line.toUpperCase()))
        .join("\n");
      isUpperCase = !isUpperCase; // Toggle state
    });
  
    // Sort
    sort.addEventListener("click", () => {
      const lines = textArea.value.split("\n").sort();
      textArea.value = lines.join("\n");
    });
  
    // Reverse
    reverse.addEventListener("click", () => {
      const lines = textArea.value.split("\n").map(line => line.split("").reverse().join(""));
      textArea.value = lines.join("\n");
    });
  
    // Strip Blank
    stripBlank.addEventListener("click", () => {
      const lines = textArea.value
        .split("\n")
        .map(line => line.trim())
        .filter(line => line !== "");
      textArea.value = lines.join("\n");
    });
  
    // Add Numbers
    addNumbers.addEventListener("click", () => {
      const lines = textArea.value.split("\n");
      textArea.value = lines.map((line, index) => `${index + 1}. ${line}`).join("\n");
    });
  
    // Shuffle
    shuffle.addEventListener("click", () => {
      const lines = textArea.value.split("\n");
      for (let i = lines.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[j]] = [lines[j], lines[i]]; // Swap
      }
      textArea.value = lines.join("\n");
    });
  });
  