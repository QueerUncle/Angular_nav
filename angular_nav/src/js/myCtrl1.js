/**
 *   project:
 *   site:cbim,
 *   author：lize,
 *   time:2017/7/11
 */
// var app = angular.module("myApp.con",[])
angular.module('myApp')
    .controller("myCtrl1",function($scope){
    console.log('aaaa');
        $scope.heades = [
            '请选择',
            '姓名',
            '出生年月日',
            '年龄'
        ];
        $scope.lists = [
            {name:'Golde',birthday:'2000-01-10',age:'17',isSelected:false},
            {name:'King',birthday:'1990-01-10',age:'13',isSelected:false},
            {name:'Mark',birthday:'1989-01-10',age:'16',isSelected:false},
            {name:'Marie',birthday:'2010-01-10',age:'20',isSelected:false}
        ];
        $scope.getChecked = function(){
            var str = '';
            angular.forEach($scope.lists,function(v,key){
                if(v.isSelected){
                    str +=v.name+'你被选中了\n';
                }
            });
            if( str===''){
                str = '都未被选中';
            }
            alert(str);
        };
        $scope.checedAll = function(){
            angular.forEach($scope.lists,function(v,key){
//                    console.log(v);
//                    console.log(key);
                console.log(v.isSelected)
                console.log($scope.selectAll);
                v.isSelected = $scope.selectAll;
            })
        };
        $scope.funCheck = function(){
            $scope.select = true;
            angular.forEach($scope.lists,function(v,key){
                $scope.select = $scope.select && v.isSelected;
            })
        };
})