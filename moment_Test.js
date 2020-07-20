var moment = require('moment'); // require

// moment.duration('50503393', 'milliseconds');
let start = moment("2018-05-16 1:00:00"); // some random moment in time (in ms)
let end = moment("2018-05-16 2:01:06"); // some random moment after start (in ms)
let diff = end.diff(start);

// execution
// let f = moment.duration(diff).format("HH:mm:ss");
// console.log(f);