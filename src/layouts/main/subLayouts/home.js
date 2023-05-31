import appState from "../../../state/appState";
import createDOMFromTasks from "../../../utilities/createDOMForTasks";
import { tasksFilter, getAllTask } from "../../../utilities/tasksUtilities";

export function listAllTask(){
     const state = appState;
     const allTasks = tasksFilter(getAllTask.bind({taskList: state.taskList,projects:state.projects}));
     const homeNode = createDOMFromTasks(allTasks);
     return homeNode;
}