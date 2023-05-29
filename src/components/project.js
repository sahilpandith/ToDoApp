import generateUUId from '../utilities/uniqueIDGenerator.js';
import Task from './task.js';
class Project {
    taskList = [];
    type = 'project';
    constructor(name){
        this.id = generateUUId.uniqueId;
        this.name = name;
    }
    addtask(title,details,priority,dueDate){
        const newProjectTask = new Task(title,details,priority,dueDate);
        this.taskList.push(newProjectTask);
    }

    removeTask(id){
        const index = this.taskList.findIndex(task => task.id===id);
        this.taskList.splice(index,1);
    }
}

export default Project;