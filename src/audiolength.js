var mp3Duration = require('mp3-duration');
 
mp3Duration('http://traffic.libsyn.com/joeroganexp/p1503.mp3?dest-id=19997', function (err, duration) {
  if (err) return console.log(err.message);
  console.log('Your file is ' + duration + ' seconds long');
});