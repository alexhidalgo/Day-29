angular.module('app', ['app.services'])
.controller('AppCtrl', function($scope, $http) {

	$scope.getResponse = [];
	$scope.changedList = [];
	$scope.searchText = '';
	$scope.upArrow = true;

  $http.get("https://openapi.etsy.com/v2/listings/active?api_key=48odg3jjgzka7c9v6lk86chk")
  .success(function(response) {

  	$scope.getResponse = _.sortBy(response.results, function(element){
  		return element.title;
  	});

  	$scope.changedList = $scope.getResponse;

  }).
  error(function(err){
  	console.log(err);
  });

	 	$scope.$watch('searchText', function() {
 	 		if($scope.searchText) {
		 		$scope.changedList = _.filter($scope.getResponse, function(element) {
		 			var title = element.title.indexOf($scope.searchText);
		 			// var quantity = element.quantity.toString().indexOf($scope.searchText);
		 			// console.log(quantity.toString().indexOf($scope.searchText));
		 			return  title > 0;
	 			});
	 		} else if( $scope.searchText === '' ) {
	 				$scope.changedList = $scope.getResponse;
	 			}
		});

		$scope.reverseOrder = function() {
			$scope.getResponse.reverse();
			$scope.upArrow = !$scope.upArrow;
		};

});
