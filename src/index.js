document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const btn = document.getElementById("btn");
  const valueP = document.getElementById("priority"); //select priority value
  const taskList = document.getElementById("tasks");
  let i = 0;
  const addTask = (e) => {
    e.preventDefault();
    const task = document.createElement("li");
    const taskColor = priorityPicker(valueP.value);
    task.setAttribute("class", `${taskColor}`);
    task.setAttribute("id", `item-${i}`);
    //task.addEventListener("dblclick", editItem);
    let txtInput = document.getElementById("new-task-description").value;
    let time = document.getElementById("new-task-time").value;
    task.innerHTML = `<p id ="edit-${i}">${txtInput}</p> <strong>${time}</strong> <button id="${i}" >DELETE</button>`;
    taskList.appendChild(task);
    let delBtn = document.getElementById(i);
    let editBtn = document.getElementById(`edit-${i}`);
    delBtn.addEventListener("click", removeItem);
    i++;
  };
  btn.addEventListener("click", addTask);
});
const removeItem = (e) => {
  const x = e.target.parentNode;
  console.log(x);
  x.remove();
};

const priorityPicker = (value) => {
  switch (value) {
    case "high":
      className = "high";
      break;
    case "low":
      className = "low";
      break;
    default:
      className = "medium";
  }
  return className;
};
