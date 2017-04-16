angular.module('video-player')

.controller('videoController', function($scope) {
  $scope.videos = window.exampleVideoData;
  $scope.currentVideo =  window.exampleVideoData[0];


  $scope.selectVideo = (vid) => {
    $scope.currentVideo = vid;
    console.log($scope.currentVideo)
  }
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
