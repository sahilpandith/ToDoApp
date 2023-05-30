import TaskList from './components/taskList.js'
import Project from './components/project.js';
import { addDays , getAllTask , tasksFilter ,getTasksFromTodayTo} from './utilities/tasksUtilities';
import Notes from './components/notes.js';
import createLandingPage from './layouts/landingPage.js';
import appState from './state/appState.js';
import './styles/styles.css';

const state = appState;
const task1 = state.taskList.addTask('something','have something on time','easy',addDays(0))
const task2 = state.taskList.addTask('dinner','have dinner on time','medium',addDays(-3))
const task3 = state.taskList.addTask('lunch','have lunch on time','medium',addDays(-8))


state.taskList.removeTask(task1);
console.log(state.taskList)
state.taskList.editTask(task3,'edited','have edited on time','easy',addDays(0))

state.projects.createProject('gym');
state.projects['gym'].addTask('breakfast','have dinner on time','high',addDays(-3));
state.projects['gym'].addTask('brunch','have brunch on time','high',addDays(-9));

state.projects.createProject('gym1');
const project2Task1ID = state.projects['gym1'].addTask('breakfast1','have dinner on time','high',addDays(-3));
const project2Task2ID = state.projects['gym1'].addTask('brunch1','have brunch on time','high',addDays(-2));


console.log(state.projects);
state.projects['gym1'].removeTask(project2Task2ID);
state.projects['gym1'].editTask(project2Task1ID,'edited','have edited on time','high',addDays(2));


console.log(state.projects);

console.log('project task list', state.projects.getProjectTasks('gym'));

const todaysTasks = tasksFilter(getTasksFromTodayTo.bind({taskList: state.taskList,projects:state.projects}),-1);
const weeklyTask = tasksFilter(getTasksFromTodayTo.bind({taskList: state.taskList,projects:state.projects}),-7);
const allTasks = tasksFilter(getAllTask.bind({taskList: state.taskList,projects:state.projects}));


console.log(todaysTasks);
console.log(weeklyTask);
console.log(allTasks);


const note1 = state.notes.addNote('title1', "avsjhgvajsvasj");
const note2 =state.notes.addNote('title2', "avsjhgvajsvasj");
const note3 =state.notes.addNote('title3', "avsjhgvajsvasj");


state.notes.removeNote(note2);

///////////////////////////DOM////////////

const rootNode = document.getElementById('root');
const homePgaeLayout = createLandingPage();
rootNode.append(homePgaeLayout);





