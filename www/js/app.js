// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('latitec', ['ionic','uiGmapgoogle-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
	cache:false,
    abstract: true,
    templateUrl: 'screens/home.html',
    controller: 'Main'
  })

  .state('app.friends', {
    url: '/friends',
	cache:false,
    views: {
      'tab-friends': {
        templateUrl: 'screens/friends.html',
		controller: 'Friends'
      }
    }
  })

  .state('app.map', {
    url: '/map',
	cache:false,
    views: {
      'tab-map': {
        templateUrl: 'screens/map.html',
		controller: 'Map'
      }
    }
  })
  .state('app.places', {
    url: '/places',
	cache:false,
    views: {
      'tab-places': {
        templateUrl: 'screens/places.html',
		controller: 'Places'
      }
    }
  })

  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/map');
})
.config(function(uiGmapGoogleMapApiProvider,$ionicConfigProvider){
	$ionicConfigProvider.views.maxCache(0);
	uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
	});
