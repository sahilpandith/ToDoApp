
import uniqueIDGenerator from "../utilities/uniqueIDGenerator";
function Note(title,description){
    this.noteID = uniqueIDGenerator.uniqueId; 
    this.title = title;
    this.description = description
}
Note.prototype.type = 'note';
class Notes {
    constructor(){
        this.notesList =[]
        this.notesID = uniqueIDGenerator.uniqueId; 
    }
    addNote(title, description){
        const newNote = new Note(title,description)
        this.notesList.push(newNote);
        return newNote.noteID;
    }
    removeNote(id){
        const index = this.notesList.findIndex(note => note.noteID==id);
        console.log('before remove', ...this.notesList);
        this.notesList.splice(index,1);
        console.log('after remove', ...this.notesList);
    }

    get allNotes(){
        return this.notesList;
    }
    get type(){
        return 'notes'
    }
}

export default Notes;