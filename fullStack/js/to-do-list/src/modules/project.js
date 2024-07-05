import { saveToLocalStorage, getFromLocalStorage } from './storage';

let projects = getFromLocalStorage('projects') || [];
let selectedProject = null;

class Project {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(taskTitle) {
        this.tasks = this.tasks.filter(task => task.title !== taskTitle);
    }

    getTasks() {
        return this.tasks;
    }
}

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
    }

    toggleComplete() {
        this.complete = !this.complete;
    }
}

function addProject(title, description, dueDate) {
    const project = new Project(title, description, dueDate);
    projects.push(project);
    saveToLocalStorage('projects', projects);
}

function addTaskToProject(title, description, dueDate, priority) {
    if (!selectedProject) return;
    const task = new Task(title, description, dueDate, priority);
    selectedProject.addTask(task);
    saveToLocalStorage('projects', projects);
}

function selectProject(title) {
    selectedProject = projects.find(project => project.title === title);
}

function removeProject(title) {
    projects = projects.filter(project => project.title !== title);
    saveToLocalStorage('projects', projects);
}

export {
    addProject,
    addTaskToProject,
    selectProject,
    removeProject,
    projects,
    selectedProject
};
