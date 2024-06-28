// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. Ваше ціль - використовуючи делегування подій, 
// створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.

// Покроковий план:

// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  if (taskInput.value.trim() !== "") {
    taskList.append(createTask(taskInput.value));
    taskInput.value = "";
  }
});

taskList.addEventListener("click", (event) => {
  deleteTask(event);
});

function createTask(value) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  li.append(value, deleteButton);
  return li;
}

function deleteTask(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
}
