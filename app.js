const request = require('request');
const options = require('./src/options.js');
const EventEmitter = require('events');
const APIRequester = require('./src/API-requester.js');

api_req = new APIRequester();
api_req.on('response', (ev) => {
    console.log(ev);
});

api_req.requestPlayer('88VUPUVJV');