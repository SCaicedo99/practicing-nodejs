console.log('Starting app.js');

const fs = require('fs'); // This imports all the functions in fs
const os = require('os'); // Importing OS module
const notes = require('./notes.js');

var res = notes.add(5,-2);
console.log(res);

// var user = os.userInfo();

// This function appends to the file greetings.txt, it creates the file if
// it doesn't alreay exist
// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`, function(err) {
//   if (err){
//     console.log('Unable to write to file');
//   }
// });
