'use strict';

angular.module('mean.lost').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('lost', {
      url: '/lost/',
      templateUrl: 'lost/views/index.html'
    });
  }
]);
