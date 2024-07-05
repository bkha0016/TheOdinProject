import { format } from 'date-fns';
import Todo from './todo';
import Project from './project';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';

const app = document.getElementById('app');
let projects = loadFromLocalStorage() || [new Project('Default Project')];
let currentProject = projects[0];

function renderProjects() {
    const projectContainer = document.getElementById('projects');
    projectContainer.innerHTML = '';

    projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.textContent = project.name;
        projectElement.classList.add('project');
        projectElement.addEventListener('click', () => {
            currentProject = project;
            renderTodos();
        });

        projectContainer.appendChild(projectElement);
    });
}

function renderTodos() {
    const todoContainer = document.getElementById('todos');
    todoContainer.innerHTML = '';

    currentProject.todos.forEach((todo, index) => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo', `priority-${todo.priority}`);
        todoElement.innerHTML = `
            <h3>${todo.title}</h3>
            <p>Due: ${format(new Date(todo.dueDate), 'MM/dd/yyyy')}</p>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;

        const deleteButton = todoElement.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            currentProject.deleteTodo(todo);
            saveToLocalStorage(projects);
            renderTodos();
        });

        todoContainer.appendChild(todoElement);
    });
}

function addProject(name) {
    const project = new Project(name);
    projects.push(project);
    saveToLocalStorage(projects);
    renderProjects();
}

function addTodoToCurrentProject(todo) {
    currentProject.addTodo(todo);
    saveToLocalStorage(projects);
    renderTodos();
}

document.getElementById('add-project').addEventListener('click', () => {
    const projectName = prompt('Enter project name:');
    if (projectName) {
        addProject(projectName);
    }
});

document.getElementById('add-todo').addEventListener('click', () => {
    const title = prompt('Enter todo title:');
    const description = prompt('Enter todo description:');
    const dueDate = prompt('Enter due date (YYYY-MM-DD):');
    const priority = prompt('Enter priority (low, medium, high):');

    if (title && description && dueDate && priority) {
        const todo = new Todo(title, description, dueDate, priority);
        addTodoToCurrentProject(todo);
    }
});

renderProjects();
renderTodos();
