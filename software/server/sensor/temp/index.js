var gpio = require("pi-gpio");

var ds18b20 = require('ds18b20');

var TemperatureSensor = require('./temperatureSensor');

var temperatureSensors = [];

ds18b20.sensors(function(err, ids) {

    temperatureSensors.push(new TemperatureSensor(function() {
        
        return ds18b20.temperatureSync(ids[0]);
        
    }));
    
});

module.exports = temperatureSensors;