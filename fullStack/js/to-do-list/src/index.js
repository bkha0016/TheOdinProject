import './styles.css';
import { renderProjects, renderAddProjectForm, renderTasks, renderAddTaskForm } from './modules/dom';
import { addProject, addTaskToProject, selectProject, removeProject } from './modules/project';

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const addProjectForm = document.getElementById('addProjectForm');
    const addTaskForm = document.getElementById('addTaskForm');

    function hideAllForms() {
        addProjectForm.style.display = 'none';
        addTaskForm.style.display = 'none';
    }

    document.getElementById('homeButton').addEventListener('click', () => {
        hideAllForms();
        contentDiv.innerHTML = '<h1>Welcome to the Todo List Application!</h1>';
    });

    document.getElementById('projectsButton').addEventListener('click', () => {
        hideAllForms();
        renderProjects();
    });

    document.getElementById('addProjectButton').addEventListener('click', () => {
        hideAllForms();
        renderAddProjectForm();
    });

    addProjectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('projectTitle').value;
        const description = document.getElementById('projectDescription').value;
        const dueDate = document.getElementById('projectDueDate').value;
        addProject(title, description, dueDate);
        hideAllForms();
        renderProjects();
    });

    addTaskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const dueDate = document.getElementById('taskDueDate').value;
        const priority = document.getElementById('taskPriority').value;
        addTaskToProject(title, description, dueDate, priority);
        hideAllForms();
        renderTasks();
    });
});
