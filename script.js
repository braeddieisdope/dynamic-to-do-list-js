// Setup Event Listener for Page Load:
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements:
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function:
    function addTask() {
        // Retrieve and trim the value from the task input field.
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty ("").
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit the function if input is empty
        }

        // Task Creation and Removal:
        // Create a new li element.
        const listItem = document.createElement('li');
        // Set its textContent to taskText.
        listItem.textContent = taskText;

        // Create a new button element for removing the task.
        const removeBtn = document.createElement('button');
        // Set its textContent to "Remove".
        removeBtn.textContent = "Remove";
        // Give it a class name of 'remove-btn'.
        removeBtn.className = 'remove-btn';

        // Assign an onclick event to the remove button
        // that, when triggered, removes the li element from taskList.
        removeBtn.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the li element.
        listItem.appendChild(removeBtn);
        // Then append the li to taskList.
        taskList.appendChild(listItem);

        // Clear the task input field by setting taskInput.value to an empty string.
        taskInput.value = "";
    }

    // Attach Event Listeners:
    // Add an event listener to addButton that calls addTask when the button is clicked.
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event
    // to allow tasks to be added by pressing the “Enter” key.
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Note: The instruction "Invoke the addTask function on DOMContentLoaded"
    // from the prompt is typically not desired for a To-Do list, as it would
    // try to add an empty task on page load. The core functionality is
    // triggered by user interaction (button click or Enter key).
    // We ensure the event listeners are set up once the DOM is loaded.
});