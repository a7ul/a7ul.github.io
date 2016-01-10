'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('MainCtrl', function($http, getFile, projectsTransformer) {
    var main = this;
    main.projects = [];

    var init = function() {
      getFile.get('/assets/projects.json').then(function(repos) {
        projectsTransformer.transform(repos, false).then(function(finalData) { //set transform(repos,true) to perform transformation
          main.projects = finalData;
        });
      });
    };

    main.openLink = function(url,project) {
      if (!url) {
        project.errorText = 'No public Url';
        return;
      }
      var win = window.open(url, '_blank');
      win.focus();
    };
    init();
  });
