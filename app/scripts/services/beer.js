'use strict';

angular.module('beerApp')
  .factory('Beer', function ($resource) {
    return $resource('/api/beers/');
  });