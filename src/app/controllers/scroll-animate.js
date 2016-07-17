(function(){
  'use strict';

  angular.module('taro')
    .controller('ScrollAnimateController', ['$scope', '$document',function($scope, $document){
      //returns the scroll position of the window
      $scope.getScrollOffset = function(w){
        w = w || window;

        if (w.pageXOffset !== null) {
          return {
            x: w.pageXOffset,
            y: w.pageYOffset
          };
        }

        if ($document.compatMode === 'CSS1Compat'){
          return {
            x: $document.documentElement.scrollLeft,
            y: $document.documentElement.scrollTop
          };
        }

        return {
          x: d.body.scrollLeft,
          y: d.body.scrollTop
        };
      };

      $scope.getPosition = function(e){
        return {
          x: e[0].offsetLeft,
          y: e[0].offsetTop
        };
      };

      $scope.getViewportSize = function(w) {
        return {
                x: Math.max($document.width() || 0),
                y: Math.max($document.height() || 0)
        };
      };
    }]);
})();
