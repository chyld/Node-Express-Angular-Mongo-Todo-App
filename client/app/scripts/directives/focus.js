(function(){
  'use strict';

  angular.module('clientApp')
    .directive('focus', function(scope, element){
      return function(){element[0].focus();};
    });

})();
