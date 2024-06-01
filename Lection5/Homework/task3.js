// Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

function showTask3() {
  let userNum = parseInt(prompt("Enter num"));
  let wholeNums = [];

  switch (true) {
    case isNaN(userNum):
      console.log("Value is NaN");
      break;
    case userNum > 10000:
      console.log("Value is more than 10000");
      break;
    default:
      for (let i = 1; i <= 100; i++) {
        if (i ** 2 <= userNum) {
          wholeNums.push(i);
        }
      }
      console.log("Whole Numbers:", wholeNums.join(", "));
  }
}
