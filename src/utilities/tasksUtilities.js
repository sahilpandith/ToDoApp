function addDays(days){
    const date = new Date();
    date.setDate(new Date().getDate() + days);
    return date;
}

function tasksFilter(cb, days){
    return cb(days);
}

function getTasksFromTodayTo(days){
    const addedDaysDate = addDays(days);
    return [...this.taskList.tasks.filter(task => task.dueDate > addedDaysDate.getTime()),
    ...Object.values(this.projects).map(project => project.tasks.filter(task => task.dueDate > addedDaysDate.getTime())).flat(Infinity)]
}

function getAllTask(){
    return [...this.taskList.tasks,
        ...Object.values(this.projects).map(project => project.tasks).flat(Infinity)]
}

export {
    getAllTask,
    getTasksFromTodayTo,
    tasksFilter,
    addDays
}