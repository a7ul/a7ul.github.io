/* globals _:true */
angular.module('websiteApp')
  .service('projectsTransformer', function() {
    'use strict';

    var projectsTransformer = this;

    var getProjectsWithPages = function(allRepos) {
      return _.filter(allRepos, function(repo) {
        return repo.has_pages; // jshint ignore:line
      });
    };

    projectsTransformer.transform = function(allRepos,doOrDoNot) {
      if(!doOrDoNot){
        return new Promise(function(resolve){
            resolve(allRepos);
        });
      }
      var pWithPages = getProjectsWithPages(allRepos);
      return new Promise(function(resolve){
          resolve(pWithPages);
      });
    };
  });
