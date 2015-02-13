'use strict';

var controller = function(TemperatureResource) {
    
    TemperatureResource.get(function(data) {
        console.log(data);
    });
    
};

module.exports = controller;