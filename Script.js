function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteChar() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.substring(0, currentValue.length - 1);
  }
  
  function calculate() {
    var expression = document.getElementById('display').value;
    try {
      var result = eval(expression);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  