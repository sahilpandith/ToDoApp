import generateUUId from '../utilities/uniqueIDGenerator.js';
import Task from './task.js';
class Project {
    tasks = [];
    type = 'project';
    constructor(name){
        this.id = generateUUId.uniqueId;
        this.name = name;
    }
    addTask(title,details,priority,dueDate){
        const newProjectTask = new Task(title,details,priority,dueDate);
        this.tasks.push(newProjectTask);
    }

    removeTask(id){
        const index = this.tasks.findIndex(task => task.id===id);
        console.log('removed', this.tasks[index]);
        this.tasks.splice(index,1);
    }

    editTask(id,title,details,priority,dueDate){
        const index = this.tasks.findIndex(task => task.id ===id);
        console.log('editing', {...this.tasks[index]});
        this.tasks[index].title= title;
        this.tasks[index].details = details;
        this.tasks[index].priority = priority;
        this.tasks[index].dueDate = new Date(dueDate).getTime();
        console.log('editing', {...this.tasks[index]});
    }
}

export default Project;