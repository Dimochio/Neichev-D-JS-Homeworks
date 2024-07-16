// Створіть клас Calculator, який буде мати методи для виконання базових математичних операцій: додавання, віднімання, множення та ділення.

class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      return "Ділення на 0 неможливе!";
    }

    return num1 / num2;
  }
}

function showTask1() {
  const calc = new Calculator();

  console.clear();

  console.log(calc.add(5, 3), "5 + 3");

  console.log(calc.subtract(10, 4), "10 - 4");

  console.log(calc.multiply(3, 6), "3 * 6");

  console.log(calc.divide(8, 2), "8 / 2");

  console.log(calc.divide(8, 0), "Помилка");
}
