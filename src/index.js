import Task from './components/task.js';
import Project from './components/project.js';

const taskList = [];
const projects = {};



function createTask(title,details,priority,dueDate){
    const newtask = new Task(title,details,priority,dueDate);
    taskList.push(newtask);
}
createTask('something','have something on time','easy',addDays(0))
createTask('dinner','have dinner on time','medium',addDays(-3))
createTask('lunch','have lunch on time','medium',addDays(-8))
console.log(taskList)


function createProject(name){
        const newProject = new Project(name);
        projects[name] = newProject;
}

createProject('gym');
projects['gym'].addtask('breakfast','have dinner on time','high',addDays(-3));
projects['gym'].addtask('brunch','have brunch on time','high',addDays(-9));

createProject('gym1');
projects['gym1'].addtask('breakfast1','have dinner on time','high',addDays(-3));
projects['gym1'].addtask('brunch1','have brunch on time','high',addDays(-2));

console.log(projects);
projects['gym1'].removeTask(109);


console.log(projects);

function tasksFilter(cb, days){
        return cb(days);
}
function getTasksFromTodayTo(days){
    const addedDaysDate = addDays(days);
    return [...taskList.filter(task => task.dueDate > addedDaysDate.getTime()),
    ...Object.values(projects).map(project => project.taskList.filter(task => task.dueDate > addedDaysDate.getTime())).flat(Infinity)]
}
function getAllTask(){
    return [...taskList,
        ...Object.values(projects).map(project => project.taskList).flat(Infinity)]
}

const todaysTasks = tasksFilter(getTasksFromTodayTo,-1);
const weeklyTask = tasksFilter(getTasksFromTodayTo,-7);
const allTasks = tasksFilter(getAllTask);

console.log(todaysTasks);
console.log(weeklyTask);
console.log(allTasks);

function addDays(days){
    const date = new Date();
    date.setDate(new Date().getDate() + days);
    return date;
}