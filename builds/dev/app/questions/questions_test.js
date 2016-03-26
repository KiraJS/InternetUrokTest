'use strict';

describe('test.questions module', function() {

  beforeEach(module('test.questions'));

  describe('Questions Controller', function() {
    var testCtrl;
    var scope;

    beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();//{}
      testCtrl = $controller('questionsCtrl', {
        $scope: scope
      });
    }));

    it('should be initialized', function(){
      expect(testCtrl).toBeDefined();
    });
  });
});
