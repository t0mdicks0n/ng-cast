angular.module('video-player')

.controller('videoController', function($scope) {
	$scope.videos = window.exampleVideoData;
})

.directive('app', function() {
  return {
  	restrict: 'E',
  	controller: 'videoController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: "src/templates/app.html"
  };
})
