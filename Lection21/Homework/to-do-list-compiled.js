"use strict";

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

var $taskInput = $("#taskInput");
var $addTaskBtn = $("#addTaskBtn");
var $taskList = $("#taskList");
var tasksArr = JSON.parse(localStorage.getItem("tasksArr")) || [];
var taskInfoModal = new bootstrap.Modal($("#taskInfoModal"));
if (tasksArr.length > 0) {
  renderToDoList();
}
$taskInput.on("keyup", function (event) {
  if (event.key === "Enter") {
    addTask($taskInput.val());
    saveTasks();
    renderToDoList();
    $taskInput.val("");
  }
});
$addTaskBtn.on("click", function () {
  addTask($taskInput.val());
  saveTasks();
  renderToDoList();
  $taskInput.val("");
});
$taskList.on("click", "li", function (event) {
  var index = $(this).data("index");
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
  var $li = $("<li>").attr("data-index", index).toggleClass("done", isDone);
  var $checkbox = $("<input>").attr("type", "checkbox").prop("checked", isDone);
  var $span = $("<span>").text(taskText);
  var $deleteButton = $("<button>").text("Delete");
  $li.append($checkbox, $span, $deleteButton);
  return $li;
}
function renderToDoList() {
  $taskList.html("");
  tasksArr.forEach(function (task, index) {
    $taskList.append(renderTask(task.text, task.isDone, index));
  });
}
