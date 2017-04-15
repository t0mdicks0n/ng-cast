angular.module('video-player')

.controller('video', function($scope) {
	console.log($scope)
}).directive('videoListEntry', function() {

  	return {
  	scope: {
  		video: '<'
  	},
  	restrict: 'E',
	controllerAs: "ctrl",
	bindToController: true,
	controller : function() {
	  // console.log($scope.$parent.videos)
	  // console.log($scope.$parent.videos)
	  // var youtubeVids = $scope.$parent.videos;



	},
	templateUrl: "src/templates/videoListEntry.html"
  };
})