(function() {
  'use strict';

  angular
    .module('taro')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
