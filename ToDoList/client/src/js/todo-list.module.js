const $taskInput = $("#taskInput");
const $addTaskBtn = $("#addTaskBtn");
const $taskList = $("#taskList");
const serverApiUrl = "http://localhost:7700/tasks";

$taskInput.on("keyup", (event) => {
  if (event.key === "Enter") {
    addTask($taskInput.val());
    $taskInput.val("");
  }
});

$addTaskBtn.on("click", () => {
  addTask($taskInput.val());

  $taskInput.val("");
});

$taskList.on("click", "li", function (event) {
  const id = $(this).attr("id");

  if ($(event.target).is("input")) {
    toggleIsDone(id);
  }

  if ($(event.target).is("button")) {
    deleteTask(id);
  }
});

async function getTasks() {
  try {
    const resp = await fetch(serverApiUrl);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

async function addTask(value) {
  const id = "id" + Math.random().toString(16).slice(2);
  if (value && value.trim() !== "") {
    await fetch(serverApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new Task(value, id)),
    });
    renderToDoList();
  }
}

async function deleteTask(id) {
  await fetch(`${serverApiUrl}/${id}`, {
    method: "DELETE",
  });
  renderToDoList();
}

async function toggleIsDone(id) {
  const tasks = await getTasks();
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.isDone = !task.isDone;
    await fetch(`${serverApiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    renderToDoList();
  }
}

renderToDoList();

function renderTask(taskText, isDone, id) {
  const $li = $("<li>").attr("id", id).toggleClass("done", isDone);
  const $checkbox = $("<input>")
    .attr("type", "checkbox")
    .prop("checked", isDone);
  const $span = $("<span>").text(taskText);
  const $deleteButton = $("<button>").text("Delete");

  $li.append($checkbox, $span, $deleteButton);

  return $li;
}

function renderToDoList() {
  getTasks().then((data) => {
    $taskList.html("");
    data.forEach((task) => {
      $taskList.append(renderTask(task.text, task.isDone, task.id));
    });
  });
}

function Task(value, id) {
  this.id = id;
  this.text = value;
  this.isDone = false;
}
