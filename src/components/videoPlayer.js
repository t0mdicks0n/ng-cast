angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    // TODO
   	scope: {
  		video: '<', 
  	},
  	restrict: 'E',
  	controller: 'videoController',
	controllerAs: 'ctrl',
	bindToController: true,

    templateUrl: "src/templates/videoPlayer.html"
  };
});
