import { CreateImageNode } from "../../utilities/domUtilities";
import toDoList from '../../assests/ToDoList.png';
function createHeaderSection(){
    const headerNode = document.createElement('header');
    const img = new CreateImageNode(toDoList,"header-icon","header icon");
    headerNode.append(img.imageNode);
    return headerNode;
}

export default createHeaderSection
