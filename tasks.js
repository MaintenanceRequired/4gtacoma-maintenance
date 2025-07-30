const tasks = [
  {
    title: "Oil Change",
    engine: "2.4L / i-Force Max",
    interval: "Every 5,000 miles",
    parts: ["90915-YZZF2 Oil Filter", "0W-20 Full Synthetic Oil"],
    capacity: "5.6 quarts",
    torque: "Drain Plug: 30 ft-lb",
    tools: ["14mm socket", "Torque wrench", "Oil filter wrench"]
  },
  {
    title: "Tire Rotation",
    interval: "Every 5,000 miles",
    torque: "Lug nuts: 83 ft-lb",
    tools: ["21mm socket", "Torque wrench", "Floor jack", "Jack stands"]
  }
];

function renderTasks() {
  const taskSection = document.getElementById("tasks");
  taskSection.innerHTML = tasks.map(task => `
    <div>
      <h2>${task.title}</h2>
      ${task.engine ? `<p><strong>Engine:</strong> ${task.engine}</p>` : ""}
      <p><strong>Interval:</strong> ${task.interval}</p>
      <p><strong>Parts:</strong> ${task.parts?.join(", ")}</p>
      <p><strong>Capacity:</strong> ${task.capacity || "–"}</p>
      <p><strong>Torque Specs:</strong> ${task.torque}</p>
      <p><strong>Tools Needed:</strong> ${task.tools.join(", ")}</p>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderTasks);