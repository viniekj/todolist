export function newTask() {
    const inputTask = document.getElementById("task");
    const list = document.getElementById("list");
    if (inputTask.value !== "") {
       const newTaskItem = document.createElement("li");
       newTaskItem.classList.add("list-item");
       newTaskItem.textContent = inputTask.value;
       list.appendChild(newTaskItem); // Make sure you have a variable 'list' defined.
 
       const checkBtn = document.createElement("input");
       checkBtn.classList.add("checkBtn");
       newTaskItem.appendChild(checkBtn);
       checkBtn.setAttribute("type", "checkbox");
 
       const removeBtn = document.createElement("button");
       removeBtn.classList.add("removeBtn");
       removeBtn.textContent = "X";
       newTaskItem.appendChild(removeBtn);
    }
 }