/**
 *   project:
 *   site:cbim,
 *   author：lize,
 *   time:2017/7/11
 */
    app.config(function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/index')

        $stateProvider
            .state('index',{
                url:'/index',
                views:{
                    '':{
                        templateUrl:'temp/index.html'
                    },
                    'header@index' :{
                        templateUrl: "temp/header.html"
                    },
                    'nav@index' :{
                        controller: 'TestController',
                        templateUrl: "temp/nav.html",
                        resolve:{
                            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                                return $ocLazyLoad.load([
                                    'js/ctrl.js'
                                ]);
                            }]
                        }
                    },
                    'content@index' :{
                        controller:'myCtrl1',
                        templateUrl: "module/a.html",
                        resolve:{
                            load: ['$ocLazyLoad', function($ocLazyLoad){
                                return $ocLazyLoad.load([
                                    'js/myCtrl1.js',
                                    'js/childRouter.js'
                                ]);
                            }]
                        }
                    },
                    'footer@index' :{
                        templateUrl: "temp/footer.html"
                    }
                }
            })
    });