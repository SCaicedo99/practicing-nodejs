console.log('Starting app.js');

// TODO when initially runnning this script make sure to install all of the packages needed with the command line
// npm install

const fs = require('fs'); // This imports all the functions in fs
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);


if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read'){
  notes.read(argv.title);
} else if (command === 'remove'){
  notes.remove(argv.title);
} else {
  console.log('Command not recognized');
};
