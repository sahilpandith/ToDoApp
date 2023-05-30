import appState from "../../../state/appState";
import createDOMFormTasks from "../../../utilities/createDOMForTasks";
import { tasksFilter, getTasksFromTodayTo } from "../../../utilities/tasksUtilities";

export function listWeeklyTask(){
     const state = appState;
     const weeklyTask = tasksFilter(getTasksFromTodayTo.bind({taskList: state.taskList,projects:state.projects}),-7);
     const weeklyTasksNode = createDOMFormTasks(weeklyTask);
     return weeklyTasksNode;
}