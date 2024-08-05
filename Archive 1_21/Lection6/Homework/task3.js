// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// Наприклад:

// const array = [1, 3, 4, 6, 2, 5, 7];

// removeElement(array,4);

// console.log(array); // Результат: [1, 3, 6, 2, 5, 7]

function showTask3() {
  const data = [1, 2, 3, 444, 5, 6, "John", 8, 9];

  console.log(data, "Input array");
  console.log(removeElement(data, 444), "delete: 444");
  console.log(removeElement(data, 5), "delete: 5");
  console.log(removeElement(data, "John"), "delete: John");
}

function removeElement(array, item) {
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
    }
  }

  return arr;

  // *** OR ***
  
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === item) {
  //     delete arr[i];
  //   }
  // }

  // return arr.flat();
}
