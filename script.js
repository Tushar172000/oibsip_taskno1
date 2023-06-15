document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.number, .operation, .clear, .equal, .decimal');
    let calculationDone = false;
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const buttonText = this.dataset.value;
        if (buttonText === 'C') {
          clearDisplay();
        } else if (buttonText === '=') {
          calculate();
        } else if (buttonText === '.') {
          if (!display.value.includes('.')) {
            appendToDisplay(buttonText);
          }
        } else if (buttonText === 'DEL') {
          deleteLastCharacter();
        } else {
          appendToDisplay(buttonText);
        }
      });
    });
  
    function clearDisplay() {
      display.value = '';
      calculationDone = false;
    }
  
    function appendToDisplay(value) {
      if (calculationDone) {
        display.value = '';
        calculationDone = false;
      }
      display.value += value;
    }
  
    function calculate() {
      if (!calculationDone) {
        try {
          display.value = eval(display.value);
          calculationDone = true;
        } catch (error) {
          display.value = 'Error';
        }
      }
    }
  
    function deleteLastCharacter() {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
      }
  });
  