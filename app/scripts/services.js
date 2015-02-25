angular.module('app.services', [])
.factory('Reverse', function() {

	return function($scope) {
		this.$scope = $scope;
		this.$scope.getResponse.reverse();
		this.$scope.upArrow = !$scope.upArrow;
	};

});
