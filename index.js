const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");
const taskCount = document.getElementById("taskCount");

let count = 0;

// Add new task to the list
function addTask() {
  const newTask = document.createElement("li");
  const taskText = document.createTextNode(todoInput.value);
  newTask.appendChild(taskText);

  // Create delete button
  const deleteBtn = document.createElement("span");
  const deleteText = document.createTextNode("X");
  deleteBtn.className = "delete";
  deleteBtn.appendChild(deleteText);
  newTask.appendChild(deleteBtn);

  // Attach delete button function
  deleteBtn.addEventListener("click", removeTask);

  // Attach checkbox function
  newTask.addEventListener("click", checkTask);

  // Add task to the list
  todoList.appendChild(newTask);

  // Clear input field
  todoInput.value = "";

  // Update task count
  count++;
  taskCount.innerText = count + " task" + (count !== 1 ? "s" : "") + " remaining";
}

// Remove task from the list
function removeTask() {
  const parent = this.parentElement;
  parent.style.display = "none";
  count--;
  taskCount.innerText = count + " task" + (count !== 1 ? "s" : "") + " remaining";
}

// Check or uncheck task from the list
function checkTask() {
  this.classList.toggle("checked");
}

// Attach add task function to button
addButton.addEventListener("click", addTask);

// Attach add task function to enter key press
todoInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addButton.click();
  }
});
