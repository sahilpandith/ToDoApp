import appState from "../../../state/appState";
import createDOMFormTasks from "../../../utilities/createDOMForTasks";
import { tasksFilter, getAllTask } from "../../../utilities/tasksUtilities";

export function listAllTask(){
     const state = appState;
     const allTasks = tasksFilter(getAllTask.bind({taskList: state.taskList,projects:state.projects}));
     const homeNode = createDOMFormTasks(allTasks);
     return homeNode;
}