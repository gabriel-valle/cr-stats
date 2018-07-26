const request = require('request');
const options = require('./options.js');

request(options('player/88VUPUVJV'), (error, body, response) => {
  if (error) throw new Error(error);
  console.log(body);
});