// Дано тризначне число, яке надае користувач, потрибно визначити:

// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

function showTask2() {
  const userNumber = prompt("Enter three-digit number");

  if (userNumber && userNumber.length == 3 && !isNaN( +userNumber ) && userNumber.trim() ) {
    if (userNumber[0] === userNumber[1] && userNumber[0] === userNumber[2]) {
      alert(`${userNumber} - All numbers are same`);
    } else if (userNumber[0] === userNumber[1] || userNumber[0] === userNumber[2] || userNumber[1] === userNumber[2]){
      alert(`${userNumber} - Some numbers are same`);
    } else {
      alert(`${userNumber} - Numbers are not same`);
    }
  } else {
    alert("You are not enter any number or your value not three-digit number, or your value is not a number");
  }
}

