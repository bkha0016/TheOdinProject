// src/modules/task.js
class Task {
    constructor(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.completed = false;
    }
  
    toggleComplete() {
      this.completed = !this.completed;
    }
  }
  
  export default Task;
  