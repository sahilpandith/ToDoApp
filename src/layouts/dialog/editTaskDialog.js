function openTaskEditDialog(task,cbOnDialogClose){
    const dialog = createDialog(task,cbOnDialogClose);
    document.querySelector('#root').append(dialog);
}

function closeTaskEditDialog(cbOnDialogClose){
    const root =document.querySelector('#root');
    root.removeChild(root.lastChild);
    cbOnDialogClose();
}

function createDialog(task,cbOnDialogClose){
    const dialog = document.createElement('div');
    dialog.classList.add('edit-dialog');
    const highChecked = task.priority==='high' ? 'checked' : undefined;
    const easyChecked = task.priority==='easy' ? 'checked' : undefined;
    const mediumChecked = task.priority==='medium' ? 'checked' : undefined;
    dialog.innerHTML = `<form class='edit-dialog-form'>
        <label for='task-title'>Title</label>
        <input type='text' id='task-title' value='${task.title}' required>
        <label for='task-details'>Details</label>
        <textarea id='task-details' >${task.details}</textarea>
        <Label for="task-priority">Priority</Label>
        <fieldset id="task-priority">
            <Label for="high">High</Label>
            <input type="radio" value="high" id="high" name="TP" ${highChecked}>
            <Label for="medium">Medium</Label>
            <input type="radio" value="medium" id="medium" name="TP" ${mediumChecked}>
            <Label for="easy">Easy</Label>
            <input type="radio" value="easy" id="easy" name="TP" ${easyChecked}>
        </fieldset>
        <Label for="task-duedate">Due Date</Label>
        <input type='date' id='task-duedate' required>
        <button type='submit'>Update task</button>
    </form>`

    dialog.querySelector("[type='date']").value = `${new Date(task.dueDate).toJSON().split('T')?.[0]}`;
    dialog.querySelector("button[type='submit']").addEventListener('click',function(event){
        onSubmit(event,task,cbOnDialogClose)
    });
    return dialog
}

function onSubmit(event,task,cbOnDialogClose){
    event.preventDefault();
    if(!(document.getElementById("task-title").validity.valid 
    && document.getElementById("task-details").validity.valid
    && document.getElementById("task-duedate").validity.valid)){
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
    const dueDate = document.getElementById("task-duedate").value;
    task.title = title;
    task.details = details;
    task.priority = priority;
    task.dueDate = new Date(dueDate).getTime();
    closeTaskEditDialog(cbOnDialogClose);
}

export {openTaskEditDialog,closeTaskEditDialog};