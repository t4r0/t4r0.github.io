(function(){
  'use strict';

  angular.module('taro')
    .controller('FullPagePanelController',['$scope', '$window', '$document', function($scope, $window, $document){
      this.viewElement = $scope.viewElement = null;

      $scope.dismiss = function(){
        $scope.dismissed = true;
      }

      var w = angular.element($window);

      w.on('scroll', function(e){
        var viewportSize = $scope.getViewportSize(w[0]);
        var offset = w[0].scrollY;

        var scale = 1 - (offset / viewportSize.y);
        var child = angular.element($scope.viewElement.children()[0]);

        $scope.viewElement.css('transform','scale3D(1,'+ scale  + ',1)');
        $scope.viewElement.css('-webkit-transform','scale3D(1,'+ scale  + ',1)');
        $scope.viewElement.css('-moz-transform','scale3D(1,'+ scale  + ',1)');

        child.css('transform','scale('+ scale + ')');
        child.css('-webkit-transform','scale('+ scale + ')');
        child.css('-moz-transform','scale('+ scale + ')');

      });

      $scope.getViewportSize = function(w) {
        return {
                x: Math.max( $document[0].documentElement.clientWidth, w.innerWidth || 0),
                y: Math.max( $document[0].documentElement.clientHeight, w.innerHeight || 0)
        };
      };
    }])
})();
