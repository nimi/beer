'use strict';

angular.module('beerApp')
	
	/**
	* Beer directive for page attribute
	*/

  .directive('beer', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: { beername:'@' },
      template: '<div class="{{beername | lowercase}} beer-container">{{beername}}</div>' +
                '<div ng-transclude></div' +
                '</div>'
    };
  });