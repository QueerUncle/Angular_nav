/**
 *   project:
 *   site:cbim,
 *   author：lize,
 *   time:2017/7/11
 */
console.log( 111)
// angular.module('myApp.nav',["ui.router"])
//     .config(function($stateProvider){
//         $stateProvider
//             .state('nav',{
//                 url:'/nav',
//                 templateUrl:'temp/nav.html',
//                 controller:'myContl'
//             })
//     })
//     console.log(333)
        app.controller('myContl',function($scope,$http) {
            // $http({
            //     method: 'GET',
            //     url: 'nav.json'
            // }).then(function successCallback(response) {
            //     // 请求成功执行代码
            //     // console.log(1)
            //     $scope.data = response.data
            //     console.log($scope.data);
            //     console.log(asdasdasd)
            // }, function errorCallback(response) {
            //     // 请求失败执行代码
            //     console.log(2)
            //     // });console.log(444)
            //     // $http.get('nav.json')
            //     //     // console.log(222)
            //     //     .then(function(res){
            //     //         console.log(res)
            //     //         console.log(asdasdasdasdasd)
            //     //         $scope.data = res.data.sites;
            //     //
            //     //         console.log($scope.data);
            //     //     })
            // })
//
//             var promise=$http({
//                 method:'GET',
//                 url:"nav.json"
//             });
//             promise.success(function(data,status,config,headers){
// //处理成功的响应
//                 $scope.data =data
//                     console.log($scope.data);
//             });
//
//             promise.error(function(data,status,hedaers,config){
// //处理失败后的响应
//             });
//             $scope.myObj = {
//                 "padding":"5px",
//                 "text-align": "center",
//                 // "width":"100%",
//
//                 "line-height":"40px",
//                 "height":"40px"
//             }
            $http.get('nav2.json').success(function(data){
                $scope.data =data.rie
                // var datatwo = []
                // var listId = [];
                // var lists = [];
                // angular.forEach($scope.data,function(i,key){
                //     if(i.lists){
                //         angular.forEach(i.lists,function(j,key){
                //             // console.log(j.id);
                //
                //             if(j.id){
                //                 lists.push(j)
                //                 listId.push(j);
                //             }
                //
                //         })
                //         // console.log(i.list)
                //         datatwo.push(i.lists);
                //     }
                // })

                // console.log($scope.data);
                // console.log(datatwo);
                // console.log(listId);
                // console.log(lists);
                // $scope.flag = false;
                $scope.clickFlag = function(){
                //     if($scope.flag==true){
                //         $scope.flag = false;
                //         $scope.flag = false;
                //     }else{
                //         $scope.flag = false;
                //         $scope.flag = false;
                //     }


                    // console.log(index);
                    // console.log(event)
                    // console.log(event.target)
                    // console.log(target)
                    // console.log(event.srcElement.firstElementChild);
                    // console.log($(this));
                    // console.log($(this).children());
                    $(this).children().addClass("active").siblings().children().removeClass("active");
                    // console.log(target.children);
                    // event.srcElement.firstElementChild.addClass("active")
                        // .nextAll().srcElement.firstElementChild.removeClass('active');
                }
            });
        });