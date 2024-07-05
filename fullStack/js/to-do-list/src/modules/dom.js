import { projects, selectProject, removeProject, selectedProject } from './project';

function renderProjects() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<h2>Select a Project</h2>';
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>Due: ${project.dueDate}</p>
            <button class="select-project-button" data-title="${project.title}">Select</button>
            <button onclick="removeProject('${project.title}')">Remove</button>
        `;
        contentDiv.appendChild(projectDiv);
    });

    document.querySelectorAll('.select-project-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const projectTitle = event.target.dataset.title;
            selectProject(projectTitle);
            renderTasks();
            renderAddTaskForm();
        });
    });
}

function renderAddProjectForm() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Add a New Project</h2>
        <form id="addProjectForm">
            <label for="projectTitle">Title:</label>
            <input type="text" id="projectTitle" required>
            <label for="projectDescription">Description:</label>
            <textarea id="projectDescription" required></textarea>
            <label for="projectDueDate">Due Date:</label>
            <input type="date" id="projectDueDate" required>
            <button type="submit">Add Project</button>
        </form>
    `;
}

function renderAddTaskForm() {
    if (!selectedProject) return;
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML += `
        <h2>Add Task to ${selectedProject.title}</h2>
        <form id="addTaskForm">
            <label for="taskTitle">Title:</label>
            <input type="text" id="taskTitle" required>
            <label for="taskDescription">Description:</label>
            <textarea id="taskDescription" required></textarea>
            <label for="taskDueDate">Due Date:</label>
            <input type="date" id="taskDueDate" required>
            <label for="taskPriority">Priority:</label>
            <select id="taskPriority" required>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    `;
}

function renderTasks() {
    if (!selectedProject) return;
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Tasks for ${selectedProject.title}</h2>
        <div id="taskList"></div>
    `;
    const taskList = document.getElementById('taskList');
    selectedProject.getTasks().forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Due: ${task.dueDate}</p>
            <p>Priority: ${task.priority}</p>
            <input type="checkbox" ${task.complete ? 'checked' : ''} onchange="toggleTaskComplete('${task.title}')">
            <button onclick="removeTask('${task.title}')">Remove</button>
        `;
        taskList.appendChild(taskDiv);
    });
}

export {
    renderProjects,
    renderAddProjectForm,
    renderAddTaskForm,
    renderTasks
};
