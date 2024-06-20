// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо.
// Створіть метод об'єкту для отримання та відображення цих даних.

function showTask1() {
const data = user.getData();
console.log(data)
}

const user = {
  name: "Dima",
  age: "26",
  country: "Ukraine",
  city: "Kharkiv",
  postIndex: "62418",
  getData: function () {
    let userData = "";
    for (let key of Object.keys(this)) {
      if (typeof this[key] === "function") {
        continue;
      }
      userData = userData.concat(`${key}: ${this[key]}; `);
    }
    return userData;
  },
};
