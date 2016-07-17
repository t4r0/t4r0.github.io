(function(){
  'use strict';

  angular.module('taro')
    .directive('stickyNav', ['$window',function($window){
      var $win = angular.element($window);
      return {
        restrict: 'A',
        link: function(scope, element, attrs){
          var topClass = attrs.stickyNav || 'sticky-nav',
              upperBorder = attrs.upperBorder === false,
              el       = angular.element(element);

          var offset   = el.offset().top;

          offset += upperBorder ? 0 : el.height();

          $win.scroll(function(){

            if($win.scrollTop() >= offset){
              element.addClass(topClass);
            }
            else if($win.scrollTop() === 0) {
              element.removeClass(topClass);
            }
          });
        }
      };
    }]);
})();
