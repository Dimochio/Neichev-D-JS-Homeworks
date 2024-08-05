// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

function showTask2() {
  const numbers = [];
  //push 20 random numbers
  for (var i = 0; i < 20; i++) {
    var random = Math.round(Math.random() * 100);
    numbers.push(random);
  }

  console.log(numbers, "original array");

  const evenNumbers = numbers.filter((_) => _ % 2 === 0);

  console.log(evenNumbers, "filtered array (even numbers)");
}
