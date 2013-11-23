(function(){
  'use strict';

  angular.module('clientApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'])
    .config(function($routeProvider){
      $routeProvider
        .when('/',{
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about',{
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/faq',{
          templateUrl: 'views/faq.html',
          controller: 'FaqCtrl'
        })
        .otherwise({redirectTo: '/'});
    });

})();
