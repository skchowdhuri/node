const fs = require('fs');



var fetchNote= () => {
    try {
        var noteString=fs.readFileSync('notes-data.json');
        notes=JSON.parse(noteString);
        return notes;
    } catch (e) {
        return [];
    }
}
var saveNotes=(notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
var addNote=(title,body) => {
    var notes=[];
    var note={
        title,
        body
    };
    notes=fetchNote();
    var duplicateNotes = notes.filter((note) => note.title===title);
    console.log(duplicateNotes);
    if(duplicateNotes.length===0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};
var removeNote=(title) =>{
    // var note={
    //     title
    // }
    var notes=fetchNote();
    var filteredNotes=notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}
var getNote=(title) =>{
    var notes=fetchNote();
    var filteredNotes=notes.filter((note)=> note.title===title);
    return filteredNotes[0];
}
var logNote=(note) =>{
    debugger;
    console.log('__')
    console.log(`title = ${note.title}`);
    console.log(`body= ${note.body}`);
}
module.exports={
    addNote: addNote,
    removeNote: removeNote,
    getNote: getNote,
    logNote: logNote
};