export function listAllNotes(){
    const notes = document.createElement('div');
    notes.classList.add('list-notes');
    notes.textContent="notes";
    return notes;
}
