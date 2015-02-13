'use strict';

var portNumber = 9615;
var http = require('http');

var indexData = {
    'links' : [
        { 
            'rel' : 'temp',
            'href' : 'http://localhost:' + portNumber + '/temp'
        }
    ]
};

var server = http.createServer(require('./server'));

/*
var gpio = require("pi-gpio");

var pin = 16;

gpio.open(pin, "output", function(err) {	
    
    console.log('open pin');
    console.log(err);
    
	gpio.write(pin, 1, function() {			// Set pin 16 high (1)
        console.log('written');
		gpio.close(pin);						// Close pin 16
	});
});
*/

console.log('starting server at port ' + portNumber);
server.listen(portNumber);