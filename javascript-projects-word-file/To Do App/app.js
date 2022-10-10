// Get required elements
const formEl = document.getElementById("task-form");
const taskInputEl = document.getElementById("task-input");
const submitButton = document.getElementById("submit-btn");
const taskListEl = document.getElementById("task-list");

// data
const data = [
  { task: "HTML I", done: true },
  { task: "CSS", done: true },
  { task: "Responsive design", done: true },
  { task: "Git", done: true },
];

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.querySelector("#task-input").value);

  const task = e.target.querySelector("#task-input").value;

  data.push({ task: task });
  console.log(this);

  showTask();
  // createTask(task);
});

const showTask = () => {
  data.map((item) => {
    createTask(item);
  });
};

const createTask = (item) => {
  // create elements
  const listItem = document.createElement("li");
  listItem.className =
    "list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2";

  const divItem = document.createElement("div");
  divItem.className = "d-flex align-items-center";
  // divItem.textContent = item.task;

  const paraEle = document.createElement("span");
  // paraEle.className = "d-flex align-items-center";
  paraEle.textContent = item.task;

  const inputItem = document.createElement("input");
  inputItem.className = "form-check-input me-2";
  inputItem.type = "checkbox";

  // appending created elements
  divItem.appendChild(inputItem);
  divItem.appendChild(paraEle);
  listItem.appendChild(divItem);
  taskListEl.appendChild(listItem);
};

showTask();
