function renderLog() {
  const logSection = document.getElementById("log");
  logSection.innerHTML = `
    <h2>Maintenance Log</h2>
    <form id="logForm">
      <input type="date" name="date" required />
      <input type="text" name="mileage" placeholder="Mileage" required />
      <input type="text" name="task" placeholder="Task performed" required />
      <input type="file" name="receipt" />
      <button type="submit">Add Entry</button>
    </form>
    <table id="logTable"><thead><tr><th>Date</th><th>Mileage</th><th>Task</th></tr></thead><tbody></tbody></table>
  `;

  const form = document.getElementById("logForm");
  const tbody = document.querySelector("#logTable tbody");

  const entries = JSON.parse(localStorage.getItem("maintenanceLog") || "[]");
  entries.forEach(entry => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${entry.date}</td><td>${entry.mileage}</td><td>${entry.task}</td>`;
    tbody.appendChild(row);
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(form);
    const newEntry = {
      date: formData.get("date"),
      mileage: formData.get("mileage"),
      task: formData.get("task")
    };
    entries.push(newEntry);
    localStorage.setItem("maintenanceLog", JSON.stringify(entries));
    location.reload();
  });
}

document.addEventListener("DOMContentLoaded", renderLog);