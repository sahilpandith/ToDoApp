import appState from "../../../state/appState";
import createDOMFormTasks from "../../../utilities/createDOMForTasks";
import { tasksFilter, getTasksFromTodayTo } from "../../../utilities/tasksUtilities";

export function listProjectTasks(){
     const state = appState;
     const projectTaskList = state.projects[state.selectedProjectID].projectTaskList.tasks
     const projectNode = createDOMFormTasks(projectTaskList)
     return projectNode;
}