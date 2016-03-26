;
(function() {
  'use strict';

  angular
    .module('test', [
      'ui.router',
      'ui.bootstrap',
      'test.questions',
      'test.theory',
      'test.dbc',
    ])
    .constant('FURL', 'https:ç//interneturoktest.firebaseio.com/')
    .controller('MainCtrl', MainController)
    .run(MainRun)
    .config(MainConfig);

  // @ngInject
  function MainController($rootScope) {
    var s = this;

    s.hello_message = "Привет, мир!";
    $rootScope.root = 'Root 1';
  }

  // @ngInject
  function MainRun($log, $rootScope, $state, $stateParams, dbc) {
    $log.debug('Main Run');

    $rootScope.alerts = [];
    $rootScope.addAlert = function(_msg, _type) {
      _type = _type || 'warning';
      $rootScope.alerts.push({
        msg: _msg,
        type: _type
      });
    };

    $rootScope.closeAlert = function(index) {
      $rootScope.alerts.splice(index, 1);
    };
  }

  // @ngInject
  function MainConfig($urlRouterProvider, $logProvider) {
    console.log('Main Config');
    $urlRouterProvider.otherwise('/questions');
    $logProvider.debugEnabled(false);
  }

})();
