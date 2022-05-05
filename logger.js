const EventEmmiter = require('events');
const emmiter = new EventEmmiter();

var url = 'http: //mylogger.io/log';
class Logger {
log(message) {
  // send an HTTP request
  console.log(message);

  // Raise an event
  emitter.emit('messageLogged', { id: 1, url: 'http://' });
}
}
module.exports = log;
