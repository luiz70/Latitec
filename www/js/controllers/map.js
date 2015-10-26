angular.module('latitec')

.controller('Map', function($scope, $ionicModal, $timeout,uiGmapGoogleMapApi) {
	uiGmapGoogleMapApi.then(function(maps) {
		$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });
  
})

