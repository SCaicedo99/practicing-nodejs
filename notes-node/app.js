console.log('Starting app');

const fs = require('fs'); // This imports all the functions in fs
const os = require('os'); // Importing OS module

var user = os.userInfo();

// This function appends to the file greetings.txt, it creates the file if
// it doesn't alreay exist
fs.appendFile('greetings.txt',`Hello ${user.username} !`, function(err) {
  if (err){
    console.log('Unable to write to file');
  }
});
