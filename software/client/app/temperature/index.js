'use strict';

module.exports = angular.module('temperature', ['ngResource', 'hateoas'])
    .controller('TemperatureCtrl', require('./temperature-controller'))
    .factory('TemperatureResource', require('./temperature-resource').temperature);