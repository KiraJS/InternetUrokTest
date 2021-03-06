'use strict';

describe('test.theory module', function() {

  beforeEach(module('test'));

  describe('Theory Controller', function() {
    var testCtrl;
    var scope;

    beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();//{}
      testCtrl = $controller('theoryCtrl', {
        $scope: scope
      });
    }));

    it('should be initialized', function(){
      expect(testCtrl).toBeDefined();
    });
  });
});


describe("Theory Factory", function () {

    beforeEach(module('test'));

    it("factory should be initialized", function () {
        angular.mock.inject(function (theoryFct) {
          expect(theoryFct).toBeDefined();
        });
    })
});
