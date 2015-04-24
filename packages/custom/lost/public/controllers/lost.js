'use strict';

/* jshint -W098 */
angular.module('mean.lost').controller('LostController', ['$scope', 'Global', 'Lost','$modal',
  function($scope, Global, Lost ,$modal) {
    $scope.global = Global;
    $scope.package = {
      name: 'lost'
    };

    $scope.message = '';

    $scope.doSomething = function(data){
    	alert(data)
    }

		$scope.show = {
			activate: false,
			paid: false,
			lost: false,
			purchase: false
		};

		$scope.changeShow= function(value){
			var isDisplayed = $scope.show[value];

			$scope.show = {
				activate: false,
				paid: false,
				lost: false,
				purchase: false
			};

			if(!isDisplayed)
				$scope.show[value] = true;
		}
 
    $scope.items = ['item1', 'item2', 'item3'];

	  $scope.open = function (size) {
	    var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller: 'ModalInstanceCtrl',
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      console.info('Modal dismissed at: ' + new Date());
	    });
	  };
  }
]).directive('ngEnter', function() {
  return {
   controller: 'LostController',
   link: function (scope, elements, attrs) {
    elements.bind('keydown keypress', function (event) {
      if (event.which === 13) {
        scope.$apply(function () {
        	scope.$eval(attrs.ngEnter);
        });
        event.preventDefault();
      }
    });
   }
  };
});


// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('mean.lost').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});