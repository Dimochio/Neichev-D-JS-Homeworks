// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

function showTask4() {
  let userNum = parseInt(prompt("Enter Num"));

  if (isNaN(userNum)) {
    console.log("Value is NaN");
  } else {
    if (isPrime(userNum)) {
      console.log(userNum + " is prime.");
    } else {
      console.log(userNum + " is not prime.");
    }
  }
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  
  for (let i = 2; i * i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
