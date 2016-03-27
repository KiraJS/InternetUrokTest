;
(function() {
  'use strict';

  angular
    .module('test.theory', [
      'test.dbc'
    ])
    .controller('theoryCtrl', theoryController)
    .run( /*@ngInject*/ function($log) {
      $log.debug('Theory Run');
    })
    .config(TheoryConfig)
    .factory('theoryFct', theoryFactory);

  /**
   * Tasks Factory
   */
  // @ngInject
  function theoryFactory () {
    var o = {};

    return o;
  }

  /**
   * Tasks Controller
   */
  // @ngInject
  function theoryController($log, $rootScope) {
    $log.debug('theoryController');
    var s = this;

    $rootScope.currentPage = 'theory';
  }
  /**
   * Tasks Config
   */
  // @ngInject
  function TheoryConfig($stateProvider){
    console.log('answers Config');
    $stateProvider
      .state('theory', {
        url: '/theory',
        templateUrl: 'app/theory/theory.html',
        controller: 'theoryCtrl',
        controllerAs: 'tc',
      });
  }
})();
