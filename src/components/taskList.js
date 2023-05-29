import generateUUId from '../utilities/uniqueIDGenerator.js'
import Task from "./task";
class TaskList {
    tasks = [];
    constructor(){
        this.id = generateUUId.uniqueId;
    }
    addTask(title,details,priority,dueDate){
        const newtask = new Task(title,details,priority,dueDate);
        this.tasks.push(newtask);
    }

    removeTask(id){
        const index = this.tasks.findIndex(task => task.id ===id);
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
 
export default TaskList;