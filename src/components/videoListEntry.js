angular.module('video-player')

.controller('video', function($scope) {
	// console.log($scope)
}).directive('videoListEntry', function() {

  	return {
  	scope: {
  		video: '<'
  	},
  	restrict: 'E',
	controllerAs: "vids",
	bindToController: true,
	controller : function($scope) {
	  console.log($scope.$parent.videos)
	},
	templateUrl: "src/templates/videoListEntry.html"
  };
})