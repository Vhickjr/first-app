// run `node index.js` in the terminal
// synchroneous mathod
//const fs = require('fs');

//const files = fs.readdirSynce('./');

//console.log(files);

// Asynchroneous

/*fs.readdir('./', function (err, files) {
  if (err) console.log('Error', err);
  else console.llog('Result', files);
}); */

const EventEmmiter = require('events');
const emmiter = new EventEmmiter();

// Register a listener
emmiter.on('messageLogged', (arg) => {
  console.log('listener called', arg);
});
// Raise an event
//emmiter.emit('messageLogged', { id: 1, url: 'http://' });
// with the arrow function, you can get rid of the function keyword
// a listener is a fuction that will be called when that event is palyed
// Raise: logging (data: message)
const log = require('./logger');
log('message');
