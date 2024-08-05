// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])'
// поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function showTask1() {
  const userString = prompt("Input any text", "Hello World");
  const toDelete = prompt(
    "What elements will be deleted? (Allow case and space)",
    "ld"
  );

  console.log(delFromStr(userString, toDelete));
}

function delFromStr(str, del) {
  if (str && del) {
    let strToArr = str.split("");

    for (var i = 0; i < strToArr.length; i++) {
      for (var j = 0; j < del.length; j++) {
        if (strToArr[i] === del[j]) {
          delete strToArr[i];
        }
      }
    }
    
    let res = strToArr.join("")

    return res;
  }

  return console.log("Error! Arg is null or empty");
}
