import plusIcon from '../../assests/plus.png';
import { CreateImageNode } from "../../utilities/domUtilities";
import { sidebarItems } from '../../constants/constants';
import appState from '../../state/appState';
import { listAllTask } from '../main/subLayouts/home';
import { listTodaysTask } from '../main/subLayouts/todayTasks';
import { listWeeklyTask } from '../main/subLayouts/weekTasks';
import { listProjectTasks } from '../main/subLayouts/projectTasks';
import { listAllNotes } from '../main/subLayouts/notesLayout';

const state = appState;
function createSideBarSection(){
    const sidebarNode = document.createElement('aside');
    sidebarNode.classList.add('sidebar');
    
    const sidebarContainer = createSideBarItems();
    sidebarNode.append(sidebarContainer);

    const img = new CreateImageNode(plusIcon,"add-icon","add icon");
    sidebarNode.append(img.imageNode);
    return sidebarNode;
}
const triggerLayoutMap= {
    'Home' : listAllTask,
    "Today" : listTodaysTask,
    "Week": listWeeklyTask,
    "Projects" : listProjectTasks,
    "Notes" :listAllNotes
}
function onSideBarItemClick(event){
    
    event.stopPropagation();
    if(this.dataset.name==='Projects'){
        return
    }
    // remove active class from all nodes
    this.parentNode.childNodes.forEach(node => {
        if(node.dataset.name==='Projects'){
            node.childNodes.forEach(childNode => childNode?.classList?.remove('active'));
            return;
        }
        node.classList.remove('active')
    })
    //set active class on clicked node
    this.classList.add('active');
    const main = document.querySelector('.main-content');
    if(main.hasChildNodes){
        main.removeChild(main.firstChild);
    }
    const mainChild = triggerLayoutMap[this.dataset.name]();
    main.append(mainChild);
}
function onProjectItemClick(event){
    event.stopPropagation();
    this.parentNode.childNodes.forEach(node => node?.classList?.remove('active'))
    this.parentNode.parentNode.childNodes.forEach(node => node?.classList?.remove('active'));
    this.classList.add('active');
    const main = document.querySelector('.main-content');
    if(main.hasChildNodes){
        main.removeChild(main.firstChild);
    }
    state.selectedProjectID = this.dataset.name;
    const mainChild = triggerLayoutMap[this.parentNode.dataset.name]();
    main.append(mainChild);
}
function createSideBarItems(){
    const sidebarcontainerNode =document.createElement('div');
    sidebarcontainerNode.classList.add('siderbar-items');
    for(let item of sidebarItems){
         const itemNode = document.createElement('div');
         itemNode.textContent = item;
         itemNode.classList.add('sidebar-item');
         item==="Home" && itemNode.classList.add('active');
         itemNode.setAttribute('data-name',item);
         itemNode.addEventListener('click',onSideBarItemClick)
         if(item==='Projects'){
            getProjectSubItems(itemNode);
         }
         sidebarcontainerNode.append(itemNode);
    }
    return sidebarcontainerNode
}

function getProjectSubItems(projectItemNode){
    for(let [projectName, value] of Object.entries(state.projects)){
        const itemNode = document.createElement('div');
        itemNode.textContent = projectName;
        itemNode.classList.add('project-subitem');
        itemNode.setAttribute('data-id',value.id);
        itemNode.setAttribute('data-name',projectName);
        itemNode.addEventListener('click',onProjectItemClick);
        projectItemNode.append(itemNode);
    }
    return projectItemNode;
}
export default createSideBarSection