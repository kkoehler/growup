'use strict';

var resources = {};

resources.temperature = function($resource) {
    return $resource('/temp');
};

module.exports = resources;