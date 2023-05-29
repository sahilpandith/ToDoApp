import TaskList from './components/taskList.js'
import Project from './components/project.js';
import { addDays , getAllTask , tasksFilter ,getTasksFromTodayTo} from './utilities/tasksUtilities';

const taskList = new TaskList();
const projectsProto = {
    createProject : function (name){
        const newProject = new Project(name);
        this[name] = newProject;
    }
}
const projects = Object.create(projectsProto);

taskList.addTask('something','have something on time','easy',addDays(0))
taskList.addTask('dinner','have dinner on time','medium',addDays(-3))
taskList.addTask('lunch','have lunch on time','medium',addDays(-8))


taskList.removeTask(103);
console.log(taskList)
taskList.editTask(102,'edited','have edited on time','easy',addDays(0))

projects.createProject('gym');
projects['gym'].addTask('breakfast','have dinner on time','high',addDays(-3));
projects['gym'].addTask('brunch','have brunch on time','high',addDays(-9));

projects.createProject('gym1');
projects['gym1'].addTask('breakfast1','have dinner on time','high',addDays(-3));
projects['gym1'].addTask('brunch1','have brunch on time','high',addDays(-2));

console.log(projects);
// projects['gym1'].removeTask(109);
projects['gym1'].editTask(109,'edited','have edited on time','high',addDays(2))


console.log(projects);

const todaysTasks = tasksFilter(getTasksFromTodayTo.bind({taskList,projects}),-1);
const weeklyTask = tasksFilter(getTasksFromTodayTo.bind({taskList,projects}),-7);
const allTasks = tasksFilter(getAllTask.bind({taskList,projects}));


console.log(todaysTasks);
console.log(weeklyTask);
console.log(allTasks);

