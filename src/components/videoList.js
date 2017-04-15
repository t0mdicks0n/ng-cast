angular.module('video-player')

.directive('videoList', function() {
  return {
  	scope: {
  		videos: '<'
  	},
  	restrict: 'E',
  	controller: 'videoController',
	controllerAs: 'ctrl',
	bindToController: true,
    templateUrl: "src/templates/videoList.html"
  }
})