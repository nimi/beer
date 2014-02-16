'use strict';

angular.module('beerApp')
  .controller('BeerCtrl', function ($scope, $http) {

    $scope.beername = '';

    $http.get('/api/beers')
      .success(function(beers) {
        $scope.beers = beers;
        console.log(beers);
      })
      .error(function(error) {
        console.log(error);
      });
  });
