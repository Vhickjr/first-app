// run `node index.js` in the terminal
// synchroneous mathod
const fs = require('fs');

//const files = fs.readdirSynce('./');

//console.log(files);

// Asynchroneous

fs.readdir('./', function (err, files) {
  if (err) console.log('Error', err);
  else console.llog('Result', files);
});
