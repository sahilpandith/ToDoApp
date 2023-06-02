import appState from "../../state/appState";
import createSideBarSection from "../sidebar/sidebarLayout";
const state = appState;
function openNewTaskDialog(task,cbOnDialogClose){
    const dialog = createDialog(task,cbOnDialogClose);
    document.querySelector('#root').append(dialog);
}

function closeNewTaskDialog(){
    const root =document.querySelector('#root');
    root.removeChild(root.lastChild);
    document.querySelector('.add-icon').classList.remove('disable-icon');
    const query = `div[data-name='${state.selectedSideBarItem}']`;
    document.querySelector(query).click();
}

function createDialog(cbOnDialogClose){
    const projectNames = Object.keys(appState.projects).map(projectName => projectName);
    const dialog = document.createElement('div');
    dialog.classList.add('edit-dialog');
    dialog.innerHTML = `
    <div>
    <fieldset id="task-add-options">
            <Label for="AddTask">AddTask</Label>
            <input type="radio" value="AddTask" id="AddTask" name="addOptions" checked>
            <Label for="addTaskInNewProject">Add Task In New Project</Label>
            <div>
            <input type="radio" value="addTaskInNewProject" id="addTaskInNewProject" name="addOptions">
            <input type='text' id='new-project-title' required>
            </div>
            <Label for="addTaskInExistingProject">Add Task In Existing Project</Label>
            <div>
            <input type="radio" value="addTaskInExistingProject" id="addTaskInExistingProject" name="addOptions">
            <select name="selectProjects" id="project-select">
            ${projectNames.map(project => `<option value=${project}>${project}</option>`)}
            </select>
            </div> 
            <Label for="addNote">Add Note</Label>
            <input type="radio" value="addNote" id="addNote" name="addOptions">
              
    </fieldset>
    </div>
    <form class='edit-dialog-form'>
        <label for='task-title'>Title</label>
        <input type='text' id='task-title' required>
        <label for='task-details'>Details</label>
        <textarea id='task-details' ></textarea>
        <Label for="task-priority">Priority</Label>
        <fieldset id="task-priority">
            <Label for="high">High</Label>
            <input type="radio" value="high" id="high" name="TP">
            <Label for="medium">Medium</Label>
            <input type="radio" value="medium" id="medium" name="TP">
            <Label for="easy">Easy</Label>
            <input type="radio" value="easy" id="easy" name="TP" >
        </fieldset>
        <Label for="task-duedate">Due Date</Label>
        <input type='date' id='task-duedate' required>
        <button type='submit'>Add</button>
    </form>`
    
    dialog.querySelector("button[type='submit']").addEventListener('click',function(event){
        onSubmit(event,cbOnDialogClose)
    });
    return dialog
}

function onSubmit(event){
    event.preventDefault();
    if(!(document.getElementById("task-title").validity.valid 
    && document.getElementById("task-details").validity.valid
    && (document.getElementById("task-duedate").validity.valid || document.getElementById('addNote').checked))){
        return;
    }
    const title = document.getElementById("task-title").value;
    const details = document.getElementById("task-details").value;
    let priority;
    document.querySelectorAll("input[type='radio']").forEach(radio => {
        if(radio.checked){
            priority= radio.value;
        }
    })
    const dueDate = new Date(document.getElementById("task-duedate").value).getTime();

    if(document.getElementById('AddTask').checked){
        state.taskList.addTask(title,details,priority,dueDate);
    }else if(document.getElementById('addTaskInNewProject').checked){
        const newProjectName = document.getElementById('new-project-title').value;
        state.projects.createProject(newProjectName);
        state.projects[newProjectName].addTask(title,details,priority,dueDate);
        reRenderSideBar();
        state.selectedSideBarItem=newProjectName;
    }else if(document.getElementById('addTaskInExistingProject').checked){
        const existingProjectName = document.getElementById('project-select').value;
        state.projects[existingProjectName].addTask(title,details,priority,dueDate);
    }else if(document.getElementById('addNote').checked){
        state.notes.addNote(title, details);
        state.selectedSideBarItem='Notes';
    }
    
    
    closeNewTaskDialog();
}

function reRenderSideBar(){
    const homeNode = document.querySelector('.homepage');
    homeNode.removeChild(homeNode.querySelector('.sidebar'));
    homeNode.insertBefore(createSideBarSection(),homeNode.lastChild);
}

export {openNewTaskDialog,closeNewTaskDialog};