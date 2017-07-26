'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('angularWaterfallApp',["ngWaterfall","ui.router"])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider) {
            $stateProvider.state("home",{
                url: "/home",
                templateUrl: "views/main.html",
                controller: "MainCtrl"
            })
            $urlRouterProvider.otherwise("/home");

        }])
    .factory("myService",function($http){
        return {
            getImages : function(cb){
                $http({ method : "GET", url: 'images.json'}).
                    success(function(data, status) {
                        cb(data,status);
                    }).
                    error(function(data, status) {
                    });
            }
        }
    })
  .controller('MainCtrl', function ($scope,$rootScope,$state,$location,$timeout,myService,$stateParams) {
        var page = 1;
        var pageSize = 20;

// console.log($stateParams.id  + " ###")
        myService.getImages(function(data){
            console.log(data);
            $scope.images = [];
            $scope.t = data.results;
            //
            console.log($scope.t);
            // // console,log(data);
            $scope.results = data.results.slice(0,page*pageSize);
            for (var i = 0; i < $scope.results.length; i++) {
                $scope.images.push($scope.results[i]);
            }

        })
      //找元素的索引
        var findIndex = function(id){
            var index = 0;
            angular.forEach($scope.t,function(i,key){
                console.log(key)
                console.log(i)
                if(i.id==id){
                    index = key;
                    return;
                }
            })
            return index;
        }
        $scope.moverover = function(id){
            alert(id)
            // var index = findIndex(id);
            // var ev = event || window.event;
            //     ev.preventDefault();
            // alert(index);
      }
      // $scope.moverover = function(index,event){
      //     var a = angular.element(index.target)
      //   var ev = event || window.event;
      //     ev.preventDefault();
      //     console.log(a.attr("src"))
      // }


      $scope.$on("waterfall:loadMore",function(){//滚动自动填充事件
          $scope.loadMoreData();
      })
      $scope.text = "点我加载更多"
        $scope.loadMore = true;
        $scope.loadMoreData = function(){
            $scope.text = "加载中，请稍后···";
            $timeout(function(){
                page++;
                myService.getImages(function(data){
                    $scope.images = [];
                    // $scope.t = data.results[i].title;
                    // console.log($scope.t);
                    $scope.results = data.results.slice(0,page*pageSize);
                    if ($scope.results.length == 73) {
                        $scope.text = "内容已经全部加载完毕"
                    }
                    for (var i = 0; i < $scope.results.length; i++) {
                        $scope.images.push($scope.results[i]);
                    }
                })
                $scope.text = "点我加载更多···"
            },1000);
        };
//        $scope.$on("waterfall:loadMore",function(){//滚动自动填充事件
//            $scope.loadMoreData();
//        })
  })

