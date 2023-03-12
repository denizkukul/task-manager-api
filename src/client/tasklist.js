const tasklistEl = document.querySelector(".task-list");

const tasks = fetch("./api/v1/task")
    .then(res => res.json())
    .then(data => {
        data.tasks.forEach(task => {
            tasklistEl.innerHTML += `<div>${task.name},completed:${task.completed}</div>`;
        });
    });
