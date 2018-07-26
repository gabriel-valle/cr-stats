const fs = require('fs');
const dev_key = fs.readFileSync("./developer_key.txt");

function getOptions(request) {
    var options = new Object();
    options.method = 'GET';
    options.headers = {auth: dev_key};
    options.url = 'https://api.royaleapi.com/' + request;
    return options;
}

module.exports = getOptions;