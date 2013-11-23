(function(){
  'use strict';

  function logXhrError(data, status, headers, config){
    console.log(data);
    console.log(status);
    console.log(config);
  }

  angular.module('clientApp')
    .service('rest', function($http, serverurl){
      this.msg = function(url, method, data, success){
        $http({url:serverurl + url, method:method, data:data}).success(success).error(logXhrError);
      };
    });

})();
