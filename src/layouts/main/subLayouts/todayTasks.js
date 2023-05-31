import appState from "../../../state/appState";
import createDOMFromTasks from "../../../utilities/createDOMForTasks";
import { tasksFilter, getTasksFromTodayTo } from "../../../utilities/tasksUtilities";

export function listTodaysTask(){
     const state = appState;
     const todaysTasks = tasksFilter(getTasksFromTodayTo.bind({taskList: state.taskList,projects:state.projects}),-1);
     const todayTasksNode = createDOMFromTasks(todaysTasks);
     return todayTasksNode;
}