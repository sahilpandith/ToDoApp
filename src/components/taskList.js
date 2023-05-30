import generateUUId from '../utilities/uniqueIDGenerator.js'
import Task from "./task";
class TaskList {
    _tasks = [];
    constructor(){
        this.id = generateUUId.uniqueId;
    }
    addTask(title,details,priority,dueDate){
        const newtask = new Task(title,details,priority,dueDate);
        this._tasks.push(newtask);
        return newtask.id;
    }

    removeTask(id){
        const index = this._tasks.findIndex(task => task.id ===id);
        console.log('removed', this._tasks[index]);
        const removedTask = this._tasks.splice(index,1);
        return removedTask.id;
    }

    editTask(id,title,details,priority,dueDate){
        const index = this._tasks.findIndex(task => task.id ===id);
        console.log('editing', {...this._tasks[index]});
        this._tasks[index].title= title;
        this._tasks[index].details = details;
        this._tasks[index].priority = priority;
        this._tasks[index].dueDate = new Date(dueDate).getTime();
        console.log('editing', {...this._tasks[index]});
    }

    get tasks(){
        return this._tasks;
    }
    get type(){
        return 'taskList';
    }
}
 
export default TaskList;