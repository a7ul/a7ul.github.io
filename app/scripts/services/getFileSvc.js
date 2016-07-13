angular.module('websiteApp')
  .service('getFile', function($http) {
    'use strict';
    
    var getFile = this;

    getFile.get = function(url) {
      return $http({
        method: 'GET',
        url: url
      }).then(function(res) {
        return res.data;
      }, function(err) {
        return err;
      });
    };

  });
