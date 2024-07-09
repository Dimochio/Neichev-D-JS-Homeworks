// Доробити TODO лист, в якому буде можливість:

// Додати завдання
// Видалити завдання
// Відзначити як виконану
// Усі дані повинні зберегтися після перезавантаження сторінки.

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const tasksArr = JSON.parse(localStorage.getItem("tasksArr")) || [];

if (tasksArr.length > 0) {
  renderToDoList();
}

taskInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask(taskInput.value);
    saveTasks();
    renderToDoList();

    taskInput.value = "";
  }
});

addTaskBtn.addEventListener("click", () => {
  addTask(taskInput.value);
  saveTasks();
  renderToDoList();

  taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
  const index = event.target.parentElement.getAttribute('data-index');

  if (event.target.nodeName === "INPUT" || event.target.nodeName === "BUTTON") {
    if (event.target.nodeName === "INPUT") {
      toggleIsDone(index);
    }

    if (event.target.nodeName === "BUTTON") {
      deleteTask(index);
    }

    saveTasks();
    renderToDoList();
  }
});

/**
 * 
 * @param {string} value 
 */
function Task(value) {
  this.text = value;
  this.isDone = false;
}

function saveTasks() {
  localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
}

/**
 * 
 * @param {string} inputValue
 */
function addTask(inputValue) {
  if (inputValue.trim() !== "") {
    tasksArr.push(new Task(inputValue));
  }
}

/**
 * 
 * @param {number} index
 */
function deleteTask(index) {
  tasksArr.splice(index, 1);
}

/**
 * 
 * @param {number} index
 */
function toggleIsDone(index) {
  tasksArr[index].isDone = !tasksArr[index].isDone;
}

/**
 * 
 * @param {string} taskText
 * @param {boolean} isDone
 * @param {number} indexId
 * @returns <li></li>
 */
function renderTask(taskText, isDone, index) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");

  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = isDone;
  span.textContent = taskText;
  deleteButton.textContent = "Delete";
  li.setAttribute("data-index", index);
  li.classList.toggle("done", isDone);
  li.append(checkbox, span, deleteButton);

  return li;
}

function renderToDoList() {
  taskList.innerHTML = "";
  tasksArr.forEach((task, index) => {
    taskList.append(renderTask(task.text, task.isDone, index));
  });
}
