let taskList = document.getElementById('task-list');

function addTask() {
    let taskInput = document.getElementById('new-task');
    let dateTimeInput = document.getElementById('task-datetime');
    let taskText = taskInput.value;
    let taskDateTime = dateTimeInput.value;

    if (taskText.trim() !== "" && taskDateTime !== "") {
        let newTask = document.createElement('li');

        newTask.innerHTML = `
            <div class="task-info">
                <strong>${taskText}</strong>
                <small>${formatDateTime(taskDateTime)}</small>
            </div>
            <div class="task-actions">
                <button class="edit" onclick="editTask(this)">Edit</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
                <button onclick="toggleComplete(this)">Complete</button>
            </div>
        `;
        taskList.appendChild(newTask);

        // Clear inputs after adding task
        taskInput.value = "";
        dateTimeInput.value = "";
    }
}

function deleteTask(button) {
    let task = button.parentElement.parentElement;
    task.remove();
}

function toggleComplete(button) {
    let task = button.parentElement.parentElement;
    task.classList.toggle('completed');
}

function editTask(button) {
    let task = button.parentElement.parentElement;
    let taskText = prompt("Edit your task:", task.querySelector('strong').textContent.trim());
    let taskDateTime = prompt("Edit date and time (yyyy-mm-ddThh:mm):", task.querySelector('small').textContent.trim());

    if (taskText) {
        task.querySelector('strong').textContent = taskText;
    }

    if (taskDateTime) {
        task.querySelector('small').textContent = formatDateTime(taskDateTime);
    }
}

function formatDateTime(dateTime) {
    let options = { 
        year: 'numeric', month: 'long', day: 'numeric', 
        hour: '2-digit', minute: '2-digit', hour12: true 
    };
    let date = new Date(dateTime);
    return date.toLocaleDateString('en-US', options);
}
