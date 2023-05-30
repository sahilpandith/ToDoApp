import appState from "../../../state/appState";
import createDOMFormTasks from "../../../utilities/createDOMForTasks";
import { tasksFilter, getTasksFromTodayTo } from "../../../utilities/tasksUtilities";

export function listTodaysTask(){
     const state = appState;
     const todaysTasks = tasksFilter(getTasksFromTodayTo.bind({taskList: state.taskList,projects:state.projects}),-1);
     const todayTasksNode = createDOMFormTasks(todaysTasks);
     return todayTasksNode;
}