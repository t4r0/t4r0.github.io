(function(){
  'use strict';

  angular.module('taro')
    .directive('scrollAnimate', ['$window', function($window){
      return {
        restrict: 'A',
        controller: 'ScrollAnimateController',
        link: function(scope, element, attrs){
          var viewport  = angular.element($window);
          var animateClass = attrs.animateScroll || 'animated';
          var hiddenClass = attrs.hiddenClass || 'animate-hidden';
          var targetOffset = attrs.animateOffset;


          var handleScroll = function(){
            var pos = scope.getPosition(element);
            var offset = scope.getScrollOffset($window);
            var viewportSize = scope.getViewportSize($window);
            var coverage = {
              x: parseInt(viewportSize.x * 0.6 + offset.x ),
              y: parseInt(viewportSize.y * 0.6 + offset.y )
            };

            if(angular.isDefined(targetOffset)){
              targetOffset = parseInt(targetOffset);
              if(offset.y >= targetOffset ){
                element.removeClass(hiddenClass);
                element.addClass(animateClass);
              }
              else {
                element.removeClass(animateClass);
                element.addClass(hiddenClass);
              }
            }
            else {
              if(coverage.y >= pos.y && coverage.x >= pos.x){
                element.removeClass(hiddenClass);
                element.addClass(animateClass);
              }
              else {
                element.removeClass(animateClass);
                element.addClass(hiddenClass);
              }
            }
          };

          element.addClass(hiddenClass);

          viewport.bind('scroll', handleScroll);
        }
      };
    }]);
})();
