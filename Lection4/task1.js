// За допомогою prompt запитати “ім'я користувача”.
// За допомогою alert вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач

function showTask1() {
  const enteredUserName = prompt("Enter your name");

  alert(`Hello, ${enteredUserName[0].toUpperCase() + enteredUserName.slice(1)}! How are you?`);
}
