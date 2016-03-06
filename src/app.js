'use strict';

// // Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

var myApp = angular.module('myApp',[]);


myApp.controller('ctrl', ['$scope', '$timeout', "$q", "$http" ,function ($scope, $timeout, $q, $http) {
    $scope.searchText = "";
    
    $scope.sentiment = 0;
    $scope.political = {};
    $scope.keywords = "";
    
    var i =0;
    
    function indico(method) {
        return 'https://apiv2.indico.io/' + method + '?key=78f0b703f174e46a4a0afca0c782c263'
    }
    
    function getSentiment () {
        var deferred = $q.defer();
        $.post(
          indico("sentiment"),
          JSON.stringify({
            'data': $scope.searchText
          })
        ).then(function(res) { 
            
            $scope.$apply(function(){
                deferred.resolve(res)
            })
            
            return deferred.promise;
        })
    }
    
    $scope.submitSearch = function() {
    
        $.post(
          indico("sentiment"),
          JSON.stringify({
            'data': $scope.searchText
          })
        ).then(function(res) {
            res = JSON.parse(res);
            console.log("sentiment",res) 
            $scope.sentiment = res;
        }).then(function() {
            $scope.$apply();
        });
        
        
        $.post(
          indico("political"),
          JSON.stringify({
            'data': $scope.searchText
          })
        ).then(function(res) {
            res = JSON.parse(res);
            console.log("political",res) 
            $scope.political = res;
        }).then(function() {
            $scope.$apply();
        });
        
        $.post(
          indico("keywords"),
          JSON.stringify({
            'data': $scope.searchText
          })
        ).then(function(res) {
            res = JSON.parse(res);
            console.log("keywords",res) 
            $scope.keywords = res;
        }).then(function() {
            $scope.$apply();
        });
        
        
        
        
        // // batch example
        // $.post(
        //   'https://apiv2.indico.io/sentiment/batch?key=78f0b703f174e46a4a0afca0c782c263',
        //   JSON.stringify({
        //     'data': [
        //       "I love writing code!",
        //       "Alexander and the Terrible, Horrible, No Good, Very Bad Day"
        //     ]
        //   })
        // ).then(function(res) { console.log(res) });
    }
}]);
    