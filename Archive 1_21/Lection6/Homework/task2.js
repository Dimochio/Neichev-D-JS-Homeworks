// Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function showTask2() {
  const dataArr = [12, "string", 1, 34, 12, true, 67, null, 25, {key: 'value'} , 68];

  console.log(calcAverage(dataArr), "Rounded average num");
}

function calcAverage(arr) {
  console.log(arr, "input array");

  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
      count++;
    }
  }

  console.log(count, "numbers count");
  console.log(sum, "sum");

  return Math.round(sum / count);
}
