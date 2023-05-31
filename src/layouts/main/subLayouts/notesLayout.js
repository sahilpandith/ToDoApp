import appState from "../../../state/appState";

export function listAllNotes(){
    const state = appState
    const notes = document.createElement('div');
    notes.classList.add('list-notes');
    for(let note of state.notes.notesList){
        const noteNode = document.createElement('div');
        noteNode.classList.add('note');
        const titeNode = document.createElement('div');
        titeNode.classList.add('note-title');
        titeNode.textContent = note.title;
        titeNode.setAttribute('contenteditable',true);
        titeNode.addEventListener('blur',function(){
            note.title =this.textContent;
        })

        const descrptionNode = document.createElement('div');
        descrptionNode.classList.add('note-description');
        descrptionNode.innerHTML = note.description;
        descrptionNode.setAttribute('contenteditable',true);
        descrptionNode.addEventListener('blur',function(){
            note.description = this.innerHTML;
        })

        const closeActionNode = document.createElement('div');
        closeActionNode.textContent = "x";
        closeActionNode.classList.add('note-close');
        closeActionNode.addEventListener('click', function(){
            const index = state.notes.notesList.findIndex(n => n.id ===note.id);
            state.notes.notesList.splice(index,1);
            const query = `div[data-name='${state.selectedSideBarItem}']`;
            document.querySelector(query).click();
        })
        
        noteNode.append(closeActionNode);
        noteNode.append(titeNode);
        noteNode.append(descrptionNode);
        notes.append(noteNode);
    }
    return notes;

}
