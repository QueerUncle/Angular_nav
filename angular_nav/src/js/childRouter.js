/**
 *   project:
 *   site:cbim,
 *   author：lize,
 *   time:2017/7/11
 */
var app = angular.module("myApp.child",['ui.router','oc.lazyLoad'])
    app.config(function($stateProvider,$urlRouterProvider){

        $stateProvider
            .state('index.a', {
                url: '/index/a',
                views: {
                    'content': {
                        templateUrl: "module/a.html",
                        controller: 'myCtrl1',
                        css:{
                            "background":"skublue"
                        }
                    }
                },
                resolve:{
                    loada:['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            [
                                'js/myCtrl1.js'
                            ]
                        );
                    }]
                }
            })
            .state('index.b', {
                url: '/index/b',
                views: {
                    'content@index': {
                        templateUrl: "module/b.html",
                        controller: 'myCtrl2',
                        resolve: {
                            loadb: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
                                        // 'js/asdasd.js',
                                        'js/myCtrl2.js'

                                    ]
                                );
                            }]
                        }
                    }
                }

            })
            .state('index.c', {
                url: '/index/c',
                views: {
                    'content@index': {
                        templateUrl: "module/c.html",
                        controller: 'myCtrl3',
                        resolve: {
                            loadc: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
                                        // 'js/asdasd.js',
                                        'js/myCtrl3.js'

                                    ]
                                );
                            }]
                        }
                    }
                }

            })
            .state('index.d', {
                url: '/index/d',
                views: {
                    'content@index': {
                        templateUrl: "module/d.html",
                        controller: 'myCtrl4',
                        resolve: {
                            loadd: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
                                        // 'js/asdasd.js',
                                        'js/myCtrl4.js'

                                    ]
                                );
                            }]
                        }
                    }
                }

            })
            .state('index.e', {
                url: '/index/e',
                views: {
                    'content@index': {
                        templateUrl: "module/e.html",
                        controller: 'myCtrl5',
                        resolve: {
                            loade: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
                                        // 'js/asdasd.js',
                                        'js/myCtrl5.js'

                                    ]
                                );
                            }]
                        }
                    }
                }

            })
            .state('index.f', {
                url: '/index/f',
                views: {
                    'content@index': {
                        templateUrl: "module/f.html",
                        controller: 'myCtrl6',
                        resolve: {
                            loadf: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
                                        // 'js/asdasd.js',
                                        'js/myCtrl6.js'
// 'js/dModule.js'
                                    ]
                                );
                            }]
                        }
                    }
                }
            });
    });

