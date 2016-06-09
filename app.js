var angularApp = angular.module('governmentApp', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider){
  $routeProvider
  .when ('/',
  {
    templateUrl: 'list/main.html',
    controller: 'GovernmentController',
    controllerAs: 'hm'
  })
  });


  angularApp.controller("GovernmentController",['$resource','$filter',function($resource,$filter){
  var vm=this;
   var govtResource = $resource('');
   vm.govResponse = govResource.get();
   console.log(vm.govResponse);
}]);
