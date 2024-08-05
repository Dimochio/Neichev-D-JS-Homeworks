// Створити через карування функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2).
//  Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function showTask2() {
  console.log("multiply(a)(b)");
  console.log("2 * 4 =", multiply(2)(4));
  console.log("4 * 8 =", multiply(4)(8));
  console.log("6 * 8 =", multiply(6)(8));
  console.log("7 * 4 =", multiply(7)(4));
  console.log("12 * 48 =", multiply(12)(48));
  console.log("125 * 10 =", multiply(125)(10));
}

function multiply(a) {
  return function (b) {
    return a * b;
  };
}
