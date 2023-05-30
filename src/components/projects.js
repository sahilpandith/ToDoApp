import Project from "./project";

const projectsProto = {
    createProject : function (name){
        if(this[name]){
            // throw new Error('project name already exits');
            alert('project name already exists');
            return;
        }
        const newProject = new Project(name);
        this[name] = newProject;
    },
    getProjectTasks : function(name){
        return this[name].projectTaskList;
    }
}
const Projects = Object.create(projectsProto);
export default  Projects;