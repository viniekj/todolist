
import { validate } from "./validate.js";
import { clear } from "./clear.js";
import { newTask } from "./newTask.js";
import { checkTask } from "./checkTask.js";
import { removeTask } from "./removeTask.js";

const inputTask = document.getElementById("task");
inputTask.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
       validate(e);
       newTask();
       clear(); 
    }

    checkTask();
    removeTask();
 });
 

















