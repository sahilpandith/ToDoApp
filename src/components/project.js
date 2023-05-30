import generateUUId from '../utilities/uniqueIDGenerator.js';
import Task from './task.js';
import TaskList from './taskList.js';
class Project {
    constructor(name){
        this.id = generateUUId.uniqueId;
        this.name = name;
        this._projectTaskList = new TaskList();
    }
    addTask(title,details,priority,dueDate){
        const newtaskID = this._projectTaskList.addTask(title,details,priority,dueDate);
        return newtaskID;
    }

    removeTask(id){
        const removedTaskID =this._projectTaskList.removeTask(id);
        return removedTaskID;
    }

    editTask(id,title,details,priority,dueDate){
        this._projectTaskList.editTask(id,title,details,priority,dueDate);
    }

    get projectTaskList(){
        return this._projectTaskList;
    }

    get type(){
        return 'project';
    }
}

export default Project;