/**
 * Created by igor on 01/10/15.
 */
angular.module('callidus.controllers',[]).

  controller('callidus_controller',function($scope,mySocket){

    mySocket.on('resposta',function(data){
      console.log(data)

    });
    mySocket.on('status',function(data){
      console.log(data);
    });

    $scope.releControl = function (rele) {
      var data = {rele: rele};

      mySocket.emit('acionado',data)
    }


    $scope.getReleStatus = function () {

      mySocket.emit('getStatus')
    }

    $scope.isActive = false;
    $scope.activeButton = function() {
      $scope.isActive = !$scope.isActive;
    }  

  });

var classApp = angular.module('classApp', []);

classApp.controller('classCtrl', function ($scope) {
  $scope.isActive = false;
  $scope.activeButton = function() {
    $scope.isActive = !$scope.isActive;
  }  
});
