import generateUUId from '../utilities/uniqueIDGenerator.js'
class Task {
    type= 'task';
    constructor(title,details, priority,dueDate){
        this.id = generateUUId.uniqueId;
        this.title= title;
        this.details = details;
        this.priority = priority;
        this.dueDate = new Date(dueDate).getTime();
        this.isTaskCompleted = false;
    }

    get taskDetails(){
        return {
            id:this.id,
            title : this.title,
            details : this.details,
            priority: this.priority,
            dueDate : this.dueDate,
            isTaskCompleted : this.isTaskCompleted,
            type:this.type
        }
    }
    set updatetaskStatus(isCompleted){
        this.isTaskCompleted= isCompleted;
    }
}

export default Task;