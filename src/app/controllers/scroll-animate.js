(function(){
  'use strict';

  angular.module('taro')
    .controller('ScrollAnimateController', ['$scope', '$document',function($scope, $document){
      //returns the scroll position of the window
      $scope.getScrollOffset = function(w){
        return {
          x: w.scrollX,
          y: w.scrollY
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
                x: Math.max( $document[0].documentElement.clientWidth, w.innerWidth || 0),
                y: Math.max( $document[0].documentElement.clientHeight, w.innerHeight || 0)
        };
      };
    }]);
})();
