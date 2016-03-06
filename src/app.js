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

function Ctrl($scope) {
    // var indico = require("indico.io");
    var apiKey = "78f0b703f174e46a4a0afca0c782c263";
    
    $scope.searchText = "";
    
    $scope.submitSearch = function() {
        // single example
        $.post(
          'https://apiv2.indico.io/sentiment?key=78f0b703f174e46a4a0afca0c782c263',
          JSON.stringify({
            'data': $scope.searchText
          })
        ).then(function(res) { console.log("sentiment", res) });
        
        $.post(
          'https://apiv2.indico.io/political?key=78f0b703f174e46a4a0afca0c782c263',
          JSON.stringify({
            'data': $scope.searchText
          })
        ).then(function(res) { console.log("political",res) });
        
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
    
    
    
   

    
//   $scope.items = [{'type' : 'settings'}, {'type':'home'}, {'type':'other'}];
//   $scope.selection = $scope.items[0];
  
//   $scope.options = [
//     {'title' : 'Title1', 'label' : 'Zip code', 'type' : 'xxx' },
//     {'title' : 'Title2', 'label' : 'MD', 'type' : 'title1'},
//     {'title' : 'Title3', 'label' : 'DMS', 'type' : 'title2'}
// ];
  
//   $scope.test = '';
//   $scope.searchType = $scope.options[0];
  
//   $scope.selectSearchType = function(op){
//     $scope.searchType = op;
//   };
  
//   $scope.actionme = function(){
//     console.log('value is:' + $scope.test);
//     //alert($scope.test);
//   };
}
