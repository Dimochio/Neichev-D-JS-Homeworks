// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// console.log(sum(4)); // 4

// console.log(sum(6)); // 10

// console.log(sum(10)); // 20

// console.log(sum(7)); // 27

function showTask1() {
  console.log("Sum with closure");
  console.log(addToSum(4));
  console.log(addToSum(6));
  console.log(addToSum(10));
  console.log(addToSum(7));
  console.log(addToSum(9));
}

function calculateSum() {
  let counter = 0;

  return function (number) {
    return (counter += number);
  };
}

let addToSum = calculateSum();
