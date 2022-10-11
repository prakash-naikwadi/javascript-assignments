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

  const item = { task: task };

  if (task) {
    createTask(item);
  } else {
    alert("Enter some task");
  }

  e.target.querySelector("#task-input").value = "";
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
  listItem.style.gap = "1rem";

  const divItem = document.createElement("div");
  divItem.className = "d-flex align-items-center";
  divItem.style.flex = "1";
  // divItem.textContent = item.task;

  const paraEle = document.createElement("input");
  paraEle.className = "form-control";
  paraEle.value = item.task;
  paraEle.setAttribute("readonly", "readonly");

  // delete btn

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.className = "btn btn-danger";

  deleteBtn.addEventListener("click", (e) => {
    deleteTask(e);
  });

  // edit btn
  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.id = "edit-btn";
  editBtn.className = "btn btn-success";

  editBtn.addEventListener("click", (e) => {
    console.log(e.target.textContent.trim());
    if (e.target.textContent.trim().toLowerCase() === "edit") {
      editTask(e);
    } else {
      e.target.textContent = "Edit";
      paraEle.setAttribute("readonly", "readonly");
    }
  });

  // appending created elements

  divItem.appendChild(paraEle);
  listItem.appendChild(divItem);
  listItem.appendChild(editBtn);
  listItem.appendChild(deleteBtn);
  taskListEl.appendChild(listItem);
};

const deleteTask = (e) => {
  // console.dir(e.target.parentElement);
  e.target.parentElement.remove();
};

const editTask = (e) => {
  console.dir(e.target.parentElement);
  // e.target.parentElement.remove();
  const parent = e.target.parentElement;
  const task = parent.querySelector("input");
  const editBtn = parent.querySelector("#edit-btn");
  console.log(task);
  task.removeAttribute("readonly");
  task.focus();

  editBtn.textContent = "save";
};

showTask();
