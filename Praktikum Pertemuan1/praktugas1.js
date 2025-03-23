document.addEventListener("DOMContentLoaded", loadTasks);

const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const task = {
        text: taskText,
        completed: false
    };

    let tasks = getTasksFromStorage();
    tasks.push(task);
    saveTasksToStorage(tasks);
    
    taskInput.value = "";
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";
    let tasks = getTasksFromStorage();

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;
        
        if (task.completed) {
            li.classList.add("completed");
        }

        li.addEventListener("click", () => toggleTask(index));
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Hapus";
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteTask(index);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    let tasks = getTasksFromStorage();
    tasks[index].completed = !tasks[index].completed;
    saveTasksToStorage(tasks);
    renderTasks();
}

function deleteTask(index) {
    let tasks = getTasksFromStorage();
    tasks.splice(index, 1);
    saveTasksToStorage(tasks);
    renderTasks();
}

function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    renderTasks();
}

