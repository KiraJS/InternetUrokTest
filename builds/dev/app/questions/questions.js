;
(function() {
  'use strict';

  angular
    .module('test.questions', [
      'test.dbc',
    ])
    .controller('questionsCtrl', questionsController)
    .constant('FURL', 'https:ç//interneturoktest.firebaseio.com/')
    .run( /*@ngInject*/ function($log) {
      $log.debug('Tasks Run');
    })
    .config(QuestionsConfig)
    .factory('questionsFct', questionsFactory);

  /**
   * Questions Factory
   */
  // @ngInject
  function questionsFactory(dbc, $firebaseArray) {
    var o = {};
    var ref = dbc.getRef();
    var quesRef = ref.child('questions');
    var questions = [];
    o.getAllQuestion = function() {
      questions = $firebaseArray(quesRef);
      return questions;
    }
    return o;
  }

  /**
   *  Questions Controller
   */
  // @ngInject
  function questionsController($log, $rootScope, questionsFct) {
    $log.debug('statisticsController');
    var s = this;
    s.answers = [];
    s.trueAnswers = [];
    s.trueAnswersCount = 0;
    s.falseAnswersCount = 0;
    s.score = 0;
    s.showTest = true;
    s.showAnswers = false;
    s.questions = questionsFct.getAllQuestion();
    s.questions.$loaded(function() {
      for (var i = 0; i < s.questions.length; i++) {
        s.answers[i] = null;
        s.trueAnswers[i] = s.questions[i].correct;
      }
    })
    s.resetResults = function() {
      s.trueAnswersCount = 0;
      s.falseAnswersCount = 0;
      s.score = 0;
      for (var i = 0; i < s.answers.length; i++) {
        s.answers[i] = null;
      }
    }
    s.checkTest = function() {
      s.questions.$loaded(function() {
        for (var i = 0; i < s.questions.length; i++) {
          if (s.answers[i] == s.trueAnswers[i]) {
            s.score = s.score + s.questions[i].score;
            s.trueAnswersCount++
          } else {
            s.falseAnswersCount++
          }
        }
      })
    }
    s.getAnswStyle = function(_index) {
      for (var i = 0; i < s.answers.length; i++) {
        if (s.answers[_index] == s.trueAnswers[_index]) {
          return "green";
        } else {
          return "red";
        }
      }
    }
    s.showCurrentPage = function() {
      if (s.showTest) {
        s.showTest = false;
        s.showAnswers = true;
      } else {
        s.showTest = true;
        s.showAnswers = false;
      }
    }
    s.showResults = function(event) {
      event.preventDefault();
      s.showCurrentPage();
      s.checkTest();
      s.getAnswStyle()
    }
    s.getTest = function() {
      s.showCurrentPage();
      s.resetResults();
    }

    $rootScope.currentPage = 'statistics';
  }
  /**
   * Questions Config
   */
  // @ngInject
  function QuestionsConfig($stateProvider) {
    console.log('questions Config');
    $stateProvider
      .state('questions', {
        url: '/questions',
        templateUrl: 'app/questions/questions.html',
        controller: 'questionsCtrl',
        controllerAs: 'qc',
      });
  }
})();
