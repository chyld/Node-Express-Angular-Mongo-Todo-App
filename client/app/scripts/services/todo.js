(function(){
  'use strict';

  function Todo(rest, t){
    this.rest = rest;
    t = t || {};

    for(var property in t){
      this[property] = t[property];
    }

    this.index    = function(fn){this.rest.msg('/todos', 'get', null, fn);};
    this.create   = function(fn){this.rest.msg('/todos', 'post', this, fn);};
    this.complete = function()  {this.rest.msg('/todos/' + this._id + '/complete', 'put', this, function(){});};
    this.destroy  = function(fn){this.rest.msg('/todos/' + this._id, 'delete', null, fn);};
  }

  angular.module('clientApp')
    .factory('todoFactory', function(rest){
      return {
        build: function(t){return new Todo(rest, t);}
      };
    });
})();
