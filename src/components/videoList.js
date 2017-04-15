angular.module('video-player')

.controller('videoController', function($scope) {
	$scope.video = exampleVideoData;
})
.directive('videoList', function() {
  return {
  	scope: {
  		video: '<'
  	},
	  // controllerAs: "props",
	  // bindToController: true,
    templateUrl: "src/templates/videoList.html"
  }
})