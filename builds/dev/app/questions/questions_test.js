'use strict';

describe('test.questions module', function() {

  beforeEach(module('test'));

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
      expect(testCtrl.answers).toBeDefined();
    });
    it('should be defined', function(){
      expect(testCtrl.answers).toBeDefined();
      expect(testCtrl.trueAnswers).toBeDefined();
      expect(testCtrl.trueAnswersCount).toBeDefined();
      expect(testCtrl.falseAnswersCount).toBeDefined();
      expect(testCtrl.score).toBeDefined();
      expect(testCtrl.showTest).toBeDefined();
      expect(testCtrl.showAnswers).toBeDefined();
      expect(testCtrl.questions).toBeDefined();
    });

    it('should reset results', function(){
      testCtrl.resetResults()
      expect(testCtrl.trueAnswersCount).toEqual(0);
      expect(testCtrl.falseAnswersCount).toEqual(0);
      expect(testCtrl.score).toEqual(0);
    });
  });
});

describe("Questions Factory", function () {

    beforeEach(module('test'));

    it("factory should be initialized", function () {
        angular.mock.inject(function (questionsFct) {
          expect(questionsFct).toBeDefined();
        });
    })
});
