angular.module('video-player')

.controller('videoController', function($scope) {
	$scope.videos = exampleVideoData;
})
.directive('videoList', function() {
  return {
  	scope: {
  		videos: '<'
  	},
	  // controllerAs: "props",
	  // bindToController: true,
    templateUrl: "src/templates/videoList.html"
  }
})