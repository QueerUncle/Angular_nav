/**
 *   project:
 *   site:cbim,
 *   author：lize,
 *   time:2017/7/11
 */
var app = angular.module("myApp",[]);

app.controller("TestController",function($rootScope,$scope,$http){
    $http.get('nav2.json').then(function(data){
        console.log(data);
        $scope.expanders = data.data.rie;
        // $scope.expanders = data.rie;
        // console.log($scope.expanders)
    })
    $scope.addStyle = function(){
        $('.oul').delegate("li","click",function(){
            $(this).addClass('active').removeClass('actives').siblings().addClass('actives').removeClass('active');
        })
    }
});


app.directive('accordion',function(){
    return {
        restrict:'EA',
        //E   表示用元素的方式呈现，  例如：  <accordion></accordion>
        //A   表示用属性的方式呈现，  例如：  <div accordion></div>
        //C   表示用样式的方式呈现，  例如：  <div class = accordion></div>
        //M   表示用注释的方式呈现，  例如：  <!-- directive:accordion -->   注意：  俩边必须留有空格。
        replace:true,
        //replace属性，当这个属性设置为true时，将会使用模板替换掉页面中标签所在的DOM（示例中的hello标签）；设置为false时，将会把模板放到标签内部。
        transclude:true,
        //要支持替换，有两个要点必须掌握。第一个要点是使用transclude属性在指令中，在HTML中，自定义指令内部还有其它DOM时，如果transclude属性设置为false，指令内定义的模板将会替换掉指令内部的DOM；如果transclude属性设置为false，将会把这些DOM放到指令内部模板中ng-transclude指令所在的地方，如果没有写ng-transclude，这些DOM也将不会出现在页面中。第二个要点是ng-transclude指令，它是AngularJS内部指令，它被用来决定在一个指令模板中哪个地方嵌入外部内容。下边的指令代码，使用这两个要点实现替换。
        template:'<div ng-transclude></div>',
        //模板内容   加入ng-transclude   可以使你的模板具有定制作用。
        controller:function(){
            var expanders = [];
            this.gotOpened = function(selectedExpander){
                // console.log(selectedExpander)
                // console.log(expanders);
                angular.forEach(expanders,function(expander){
                    if( selectedExpander != expander ){
                        expander.showMe = false;
                    }
                });
            };
            this.addExpander = function(expander){
                expanders.push(expander);
            };

        }
    };
});


app.directive('expander',function(){
    return {
        restrict:'EA',
        replace:true,
        transclude: true,
        require: '^?accordion',
        //指定去哪个指令上去寻找；
        scope:{
            expanderTitle: '='
        },
        //@   传递一个字符串作为属性的值     例如：  str  :'@string';
        //=   使用副作用域中的一个属性，绑定数据到指令的属性中，   例如：  name:'=username';
        //&    使用父作用域中的一个函数，可以在指令中调用        例如：   getName :'&getUserName';
        //总之就是用符号前缀来说明如何为指令传值，
        template:"<div>"+"<div class = 'ex-title' ng-click = 'toggle()' >{{expanderTitle}}</div>"+"<div class = 'ex-body' ng-show = 'showMe' ng-transclude></div>"+"</div>",
        link:function(scope,iElemane,iAttrs,accordionController){
            console.log(scope)
           var arr = []
           arr.push(scope.expanderTitle)
           for(var i = 0;i<arr.length;i++){
                if(arr[i]==='系统管理'){
                    // console.log("++++++++++++++++++++++++++++")
                    scope.showMe = true;
                }else{
                    scope.showMe = false;
                }
           }
            accordionController.addExpander(scope);
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
                accordionController.gotOpened(scope);
            };
        }
    };
});