(function(){
  'use strict';

  angular.module('taro')
    .controller('FullPagePanelController',['$scope', function($scope){
      $scope.dismiss = function(){
        $scope.dismissed = true;
      }
    }])
})();
