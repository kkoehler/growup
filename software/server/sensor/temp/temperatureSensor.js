var temperatureSensor = function(callback){
    
    this.callback = callback;
    
};

temperatureSensor.prototype.getValue = function() {
    return {
        '@context' : {
            '@vocab' : 'http://purl.oclc.org/NET/ssnx/meteo/aws#',
            'meteo'  : 'http://purl.oclc.org/NET/ssnx/meteo/aws#',
            'observation' : 'http://purl.oclc.org/NET/ssnx/ssn#',
            'hydra'  : ''
        },  
        '@type' : 'meteo:TemperatureSensor',
        'observation:hasValue' : this.callback()
    }
};



module.exports = temperatureSensor;