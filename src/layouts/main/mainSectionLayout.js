import { listAllTask } from "./subLayouts/home";
function createMainSection(){
    const mainNode = document.createElement('main');
    mainNode.classList.add("main-content");
    mainNode.append(listAllTask());
    return mainNode;
}
export default createMainSection;