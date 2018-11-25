console.log('Starting notes.js');

module.exports.addNote =  () => {
  console.log('AddNote');
  return 'NewNote';
};

module.exports.add = function(a,b) {
  return (a+b);
};
