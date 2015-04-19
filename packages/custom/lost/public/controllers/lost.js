'use strict';

/* jshint -W098 */
angular.module('mean.lost').controller('LostController', ['$scope', 'Global', 'Lost',
  function($scope, Global, Lost) {
    $scope.global = Global;
    $scope.package = {
      name: 'lost'
    };
  }
]);
