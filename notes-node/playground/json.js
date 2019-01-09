// var obj = {
//   name: 'Sebastian'
// };
// var stringObj = JSON.stringify(obj); //  This converts an object into a string
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Sebastian" , "age": 19}';
// var person = JSON.parse(personString); // This converts a string into an object
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title : 'Some Title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
