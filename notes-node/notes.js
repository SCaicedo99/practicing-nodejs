console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
};

var read = (title) => {
  console.log('Reading note with title: ', title);
};

var remove = (title) => {
  console.log('Removing the note with title: ', title);
};

module.exports = {
  addNote,
  getAll,
  read,
  remove
};
