import appState from "../../../state/appState";
import createDOMFromTasks from "../../../utilities/createDOMForTasks";
import { tasksFilter, getTasksFromTodayTo } from "../../../utilities/tasksUtilities";

export function listWeeklyTask(){
     const state = appState;
     const weeklyTask = tasksFilter(getTasksFromTodayTo.bind({taskList: state.taskList,projects:state.projects}),-7);
     const weeklyTasksNode = createDOMFromTasks(weeklyTask);
     return weeklyTasksNode;
}