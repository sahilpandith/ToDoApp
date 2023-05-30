import { compareAsc, format } from 'date-fns';
import { CreateImageNode } from './domUtilities';
import editIcon from '../assests/edit.png';
import deleteIcon from '../assests/delete.png';
import appState from '../state/appState';

export default function createDOMFormTasks(tasksList){
    const node = document.createElement('div');
    node.classList.add('task-list')
    for(let task of tasksList){
        const childNode = document.createElement('div');
        childNode.setAttribute('data-id',task.id)
        childNode.classList.add('task-list-item')
        for(let [key,value] of Object.entries(task)){
            if(key==="id"){
                continue;
            }
            if(key==="priority"){
                childNode.style.borderLeft = priorityColor[value];
                continue;
            }
            if(key === 'isTaskCompleted'){
                const checkbox = document.createElement('input');
                checkbox.setAttribute('type','checkbox');
                checkbox.classList.add('task-checkbox');
                checkbox.checked = value;
                checkbox.addEventListener('click', function(){
                    task.updatetaskStatus= this.checked;
                })
                childNode.insertBefore(checkbox,childNode.firstChild);
                continue;
            }
           
            const span = document.createElement('span');
            span.textContent = value;
            span.setAttribute('data-name',key);
            span.setAttribute('data-value',value);
            if(key==="dueDate"){
                span.textContent = format(new Date(value), 'yyyy-MM-dd');
            }
            childNode.append(span);
        }
        
        const editImg = new CreateImageNode(editIcon,'edit-action','edit task');
        editImg.imageNode.addEventListener('click',(event)=>editTask(event,task));
        const deleteImg = new CreateImageNode(deleteIcon,'delete-action','delete task');
        deleteImg.imageNode.addEventListener('click',(event)=>deleteTask(event,task));

        childNode.append(editImg.imageNode);
        childNode.append(deleteImg.imageNode);
        node.append(childNode) 
    }
    
    function deleteTask(event,task){
        console.log(event,task);
    }
    function editTask(event,task){
        console.log(event,task);
    }
    
    return node
}

const priorityColor = {
    'high' : 'red 6px solid',
    'medium' : 'orange 6px solid',
    'easy' : 'green 6px solid'
}
const componentKeyMapping = {
    isTaskCompleted : 'checkbox',
    details: 'text',
    priority: ' border',
    dueDate: 'text',
    Actions: ''
}