'use strict';

angular.module('mean.lost').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('lost', {
      url: '/lost/',
      templateUrl: 'lost/views/1.html'
    }).state('lost1', {
      url: '/lost/1',
      templateUrl: 'lost/views/1.html'
    }).state('lost2', {
      url: '/lost/2',
      templateUrl: 'lost/views/2.html'
    }).state('lost3', {
      url: '/lost/3',
      templateUrl: 'lost/views/3.html'
    });
  }
]);
