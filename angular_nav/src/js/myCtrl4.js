/**
 *   project:
 *   site:cbim,
 *   author：lize,
 *   time:2017/7/11
 */
angular.module('myApp')
.controller("myCtrl4",function($scope){
    console.log('4444');
    $scope.data = new Date();
    setInterval(function(){
        $scope.$apply(function(){
            $scope.data = new Date();
        })
    },1000)
})