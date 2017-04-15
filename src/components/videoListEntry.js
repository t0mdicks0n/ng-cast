angular.module('video-player')

.directive('videoListEntry', function() {
  return {
    scope: {
  		video: '<'
  	},
  	restrict: 'E',
  	controller: 'videoController',
	controllerAs: 'ctrl',
	bindToController: true,
	templateUrl: "src/templates/videoListEntry.html"
  };
})