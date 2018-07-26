const EventEmitter = require('events');
const request = require('request');
const options = require('./options.js');

class APIRequester extends EventEmitter{
    requestPlayer(tag) {
        request(options('player/' + tag), (error, response, body) => {
            if (error) throw new Error(error);
            console.log('api responded');
            this.emit('response', body);
          });
    }
}

module.exports = APIRequester;