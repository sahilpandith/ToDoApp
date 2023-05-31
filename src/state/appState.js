import Notes from "../components/notes";
import Project from "../components/project";
import TaskList from "../components/taskList";
import Projects from "../components/projects";

let _instance;
let _notes;
let _taskList;
let _projects;

const projectsProto = {
    createProject : function (name){
        if(this[name]){
            throw new Error('project name already exits');
        }
        const newProject = new Project(name);
        this[name] = newProject;
    },
    getProjectTasks : function(name){
        return this[name].projectTaskList;
    }
}


class AppState {
    selectedPID;
    selelectedSBItem='Home';
    constructor(){
        if(_instance){
            throw new Error('Cannot create multiple instances of app state');
        }
        _notes = new Notes();
        _taskList = new TaskList()
        _projects = Projects;
        _instance = this;
    }

    get notes(){
        return _notes;
    }
    
    get taskList(){
        return _taskList;
    }

    get projects(){
        return _projects;
    }

    get selectedProjectID(){
        return this.selectedPID;
    }
    set selectedProjectID(id){
        this.selectedPID = id;
    }
    set selectedSideBarItem(item){
        this.selelectedSBItem = item;
    }
    get selectedSideBarItem(){
        return this.selelectedSBItem;
    }
}

export default Object.seal(new AppState());