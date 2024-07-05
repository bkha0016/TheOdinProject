class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    deleteTodo(todo) {
        this.todos = this.todos.filter(t => t !== todo);
    }
}

export default Project;
