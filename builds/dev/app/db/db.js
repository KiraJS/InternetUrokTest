;(function(){
  'use strict';
  angular.module('test.dbc', [
    'firebase',
  ])
  .factory('dbc', dbcFactory)

  // @ngInject
  function dbcFactory(FURL, $firebaseAuth, $firebaseArray, $firebaseObject)
  {
    var o = {};
    var ref = new Firebase(FURL);
    var questions = [];
    o.getRef = function(){
      return ref;
    }
    return o;
  }
})();
