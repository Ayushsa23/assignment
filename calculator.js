let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function calculate() {
  try {
    displayValue = displayValue.replace(/sin/g, 'Math.sin');
    displayValue = displayValue.replace(/cos/g, 'Math.cos');
    displayValue = displayValue.replace(/tan/g, 'Math.tan');
    displayValue = displayValue.replace(/log/g, 'Math.log');
    displayValue = displayValue.replace(/sqrt/g, 'Math.sqrt');
    displayValue = displayValue.replace(/(\d+)!/g, function(match, p1) {
      return factorial(parseInt(p1));
    });

    const result = eval(displayValue);
    displayValue = result;
    document.getElementById('display').value = displayValue;
  } catch (error) {
    displayValue = 'Error';
    document.getElementById('display').value = displayValue;
  }
}