(function(){
  'use strict';

  angular.module('taro')
    .directive('fullPagePanel',[function(){
      return {
        restrict: 'E',
        transclude: true,
        controller: 'FullPagePanelController',
        templateUrl: 'app/templates/panel.html',
        link: function(scope, element, attrs, ctrl){
          scope.viewElement = element;
        }
      }
    }])
})();
