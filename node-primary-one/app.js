console.log('Hello console');

const fs = require('fs');

const _=require('lodash');
const yargs=require('yargs');

const app2=require('./app2.js');
const notes=require('./notes.js');

var command=process.argv[2];

var argv=yargs.argv;

if(command==='add'){
  var note= notes.addNote(argv.title,argv.body);
   if(note){
       console.log('Inserted');
   }
   else{
       console.log('Duplicate Valu');
   }
}
else if(command==='list'){
   app2.getAll();
}
else if(command==='read') {
    var note=notes.getNote(argv.title);
    if(note){
        notes.logNote(note);
    }
    else{
        console.log('Object Not Found')
    }

}
else if(command==='remove'){
    var note=notes.removeNote(argv.title);
    if(note){
        console.log('Removed');
    }
    else{
        console.log('Not Removed');
    }
}



// fs.appendFileSync('sagor.txt','This is Sagor Chowdhuri');
