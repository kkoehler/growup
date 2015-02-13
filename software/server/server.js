  'use strict';

var temperatureSensors = require('./sensor/temp');

var indexData = {
    'links' : [
        { 
            'rel' : 'xub:temperature',
            'href' : 'http://localhost:9000/temp'
        }
    ]
};

module.exports = function (req, res) {
    
    console.log(req.url);
    
    if (req.url.indexOf('/temp') !== -1) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(temperatureSensors[0].getValue()));
    } else {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(indexData));
    }
         
    
};