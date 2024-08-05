// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно

const sandbox = document.getElementById("sandbox");

function showTask1() {
  sandbox.append(generatePythagorasTable(10));
}

function generatePythagorasTable(size) {
  const table = document.createElement("table")
  const tableBody = document.createElement("tbody");
  table.classList.add('pythagoras-table');

  for (let x = 1; x <= size; x++) {
    const row = document.createElement("tr");

    for (let y = 1; y <= size; y++) {
      const cell = document.createElement("td");
      cell.textContent = x * y;
      row.append(cell);
    }

    tableBody.append(row);
  }

  table.append(tableBody);

  return table;
}

function clearSandbox () {
  sandbox.innerHTML = '';
}
