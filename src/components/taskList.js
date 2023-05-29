import Task from "./task";
class TaskList {
    tasks = [];
    constructor(){
        this.id = generateUUId.uniqueId;
    }
    addTask(){
        const newtask = new Task(title,details,priority,dueDate);
        taskList.push(newtask);
    }
}