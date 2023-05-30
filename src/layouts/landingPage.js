import createHeaderSection from './header/headerLayout';
import createSideBarSection from './sidebar/sidebarLayout';
import createMainSection from './main/mainSectionLayout';

function createLandingPage(){
    const homeNode = document.createElement('div');
    homeNode.classList.add('homepage');
    homeNode.append(createHeaderSection());
    homeNode.append(createSideBarSection());
    homeNode.append(createMainSection());
    return homeNode;
}

export default createLandingPage;