const BASE_URL = "http://localhost:8080/api";

// Load dropdown data
async function loadDropdowns() {
    const categories = await fetch(`${BASE_URL}/categories`).then(res => res.json());
    const priorities = await fetch(`${BASE_URL}/priorities`).then(res => res.json());
    const users = await fetch(`${BASE_URL}/users`).then(res => res.json());

    const categorySelect = document.getElementById("category");
    const prioritySelect = document.getElementById("priority");
    const userSelect = document.getElementById("user");

    categories.forEach(c => {
        categorySelect.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });

    priorities.forEach(p => {
        prioritySelect.innerHTML += `<option value="${p.id}">${p.name}</option>`;
    });

    users.forEach(u => {
        userSelect.innerHTML += `<option value="${u.id}">${u.name}</option>`;
    });
}

// Create task
async function createTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const categoryId = document.getElementById("category").value;
    const priorityId = document.getElementById("priority").value;
    const userId = document.getElementById("user").value;

    await fetch(`${BASE_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title,
            description,
            categoryId,
            priorityId,
            userId
        })
    });

    loadTasks();
}

// Load all tasks
async function loadTasks() {
    const tasks = await fetch(`${BASE_URL}/tasks`).then(res => res.json());
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(t => {
        list.innerHTML += `
<li class="task-item">
    <div class="task-details">
        <span class="task-title">${t.title}</span>
        <span>${t.description}</span>
    </div>
    <button class="delete-btn" onclick="deleteTask(${t.id})">Delete</button>
</li>
`;
    });
}

// Delete task
async function deleteTask(id) {
    await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "DELETE"
    });

    loadTasks();
}

// Initial load
loadDropdowns();
loadTasks();