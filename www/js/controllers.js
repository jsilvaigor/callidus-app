/**
 * Created by igor on 01/10/15.
 */
angular.module('callidus.controllers',[]).

  controller('callidus_controller',function($scope,mySocket,$ionicPopup){

    mySocket.on('resposta',function(data){

      if(data.relay == "relay001"){
        if (data.ligado){
          $scope.lampadaActive = true;

          if(data.dia){
            $scope.showAlert();
          }
        }else{
          $scope.lampadaActive = false;
        }

      }else if(data.relay == "relay002"){
        if (data.ligado){
          $scope.monitorActive = true;
        }else{
          $scope.monitorActive = false;
        }
      }

    });
    mySocket.on('status',function(data){

      for(key in data){
        if(key == "relay001"){
          if (data[key]){
            $scope.lampadaActive = true;

          }else{
            $scope.lampadaActive = false;
          }
        }else if(key == "relay002"){
          if (data[key]){
            $scope.monitorActive = true;
          }else{
            $scope.monitorActive = false;
          }
        }
      }

    });


    $scope.releControl = function (rele) {
      var data = {relay: rele};

      mySocket.emit('acionado',data)
    }


    $scope.getReleStatus = function () {
      mySocket.emit('getStatus')
    }

    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title:'<span class="icon ion-leaf"></span>',
        template: ' <h3><b>O dia está lindo! Você poderia estar economizando!  =/</b></h3>'
      });

    };



  });

var classApp = angular.module('classApp', []);

classApp.controller('classCtrl', function ($scope) {
  $scope.isActive = false;
  $scope.activeButton = function() {
    $scope.isActive = !$scope.isActive;
  }
});
