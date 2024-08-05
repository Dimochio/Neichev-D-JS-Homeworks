// Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:

// Поля:

// Name - обовьязкове текстове поле
// Message - текстове поле не меньше 5 символів
// Phone number - обовьязкове поле типу phone. З початком на +380
// Email - email обовьязково повинен мати @ та крапку
// Після відправки, в консоль відображаємо дані, які ввів користувач.
// Під час помилки показувати її під полем.

const form = document.getElementById("sendMessageForm");
const formInputs = document.querySelectorAll("#sendMessageForm .js-input");
const errorClass = "has-error";

const validators = {
  userName: (value) => value.trim() !== "",
  userMessage: (value) => value.trim().length > 5,
  userTel: (value) => patterns.phone.test(value),
  userEmail: (value) => patterns.email.test(value) || value === "",
};

const patterns = {
  phone: /^\+380\d{9}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isFormValid = true;

  //поле "email" не є обов'язковим, але валідується якщо користувач шось ввів

  for (let input of formInputs) {
    const validate = validators[input.id];
    const isInputValid = validate(input.value);
    input.parentElement.classList.toggle(errorClass, !isInputValid);
    if (!isInputValid) {
      isFormValid = false;
    }
  }

  if (isFormValid) {
    const sendData = {
      name: form.userName.value,
      message: form.userMessage.value,
      phone: form.userTel.value,
      email: form.userEmail.value,
    };
    console.log('Entered data from user ==>', sendData);
    alert("Форму відправлено!")
    form.reset()
  }
});
