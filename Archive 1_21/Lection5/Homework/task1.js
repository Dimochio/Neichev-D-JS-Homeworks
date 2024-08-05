// Вивести в консоль числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5 ....)

function showTask1() {
  let arr = [];
  for (let i = 20; i <= 30; i += 0.5) {
    arr.push(i);
  }
  
  console.log(arr.join(" "));
}
