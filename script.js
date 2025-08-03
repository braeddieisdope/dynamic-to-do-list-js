// script.js
// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the list item and set its text
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        // Add event to remove the task when the button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button and list item to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add click event to add task button
    addButton.addEventListener("click", addTask);

    // Add keypress event to input field to allow 'Enter' key submission
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});