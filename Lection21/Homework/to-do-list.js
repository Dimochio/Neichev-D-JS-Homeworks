// Доробити TODO лист, в якому буде можливість:

// Додати завдання
// Видалити завдання
// Відзначити як виконану
// Усі дані повинні зберегтися після перезавантаження сторінки.\

//********************

// Переделать ToDo-list с использованием Jquery
// За допомогою Bootstrap створити модальне вікно до TODO list,
// яке по кліку на завдання буде показувати вікно з його текстом.

// Оптимізовано за допомогою babel

const $taskInput = $("#taskInput");
const $addTaskBtn = $("#addTaskBtn");
const $taskList = $("#taskList");
const tasksArr = JSON.parse(localStorage.getItem("tasksArr")) || [];
const taskInfoModal = new bootstrap.Modal($("#taskInfoModal"));

if (tasksArr.length > 0) {
  renderToDoList();
}

$taskInput.on("keyup", (event) => {
  if (event.key === "Enter") {
    addTask($taskInput.val());
    saveTasks();
    renderToDoList();

    $taskInput.val("");
  }
});

$addTaskBtn.on("click", () => {
  addTask($taskInput.val());
  saveTasks();
  renderToDoList();

  $taskInput.val("");
});

$taskList.on("click", "li", function (event) {
  const index = $(this).data("index");

  if ($(event.target).is("input")) {
    toggleIsDone(index);
    saveTasks();
    renderToDoList();
  }

  if ($(event.target).is("button")) {
    deleteTask(index);
    saveTasks();
    renderToDoList();
  }

  if ($(event.target).is("span")) {
    $("#modalTextContent").text(tasksArr[index].text);
    taskInfoModal.show();
  }
});

function Task(value) {
  this.text = value;
  this.isDone = false;
}

function saveTasks() {
  localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
}

function addTask(inputValue) {
  if (inputValue.trim() !== "") {
    tasksArr.push(new Task(inputValue));
  }
}

function deleteTask(index) {
  tasksArr.splice(index, 1);
}

function toggleIsDone(index) {
  tasksArr[index].isDone = !tasksArr[index].isDone;
}

function renderTask(taskText, isDone, index) {
  const $li = $("<li>").attr("data-index", index).toggleClass("done", isDone);
  const $checkbox = $("<input>")
    .attr("type", "checkbox")
    .prop("checked", isDone);
  const $span = $("<span>").text(taskText);
  const $deleteButton = $("<button>").text("Delete");

  $li.append($checkbox, $span, $deleteButton);

  return $li;
}

function renderToDoList() {
  $taskList.html("");
  tasksArr.forEach((task, index) => {
    $taskList.append(renderTask(task.text, task.isDone, index));
  });
}
