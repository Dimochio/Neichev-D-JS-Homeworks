// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу).
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше.
// Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації,
// то функція виводить в консоль останній введення користувача і завершує функцію.

function showTask3() {
  console.log("Input numbers");
  inputNum();
}

function inputNum() {
  let number;

  for (let i = 0, attempts = 10; i < attempts; i++) {
    number = prompt("Input a number greater than 100");

    switch (true) {
      case number == null:
        console.log("User canceled");
        return;
      case isNaN(+number):
        console.log(`Entered value is NaN ==> "${number}"`);
        return;
      case number > 100:
        console.log(`Accept! User entered number greater than 100 ==> "${number}"`);
        return;
    }
  }

  console.log(
    `Number of attempts exhausted. Last entered value ==> "${number}"`
  );
}
