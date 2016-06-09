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


angularApp.controller("GovernmentController",['$resource',function($resource){
  var vm=this;
   var govtResource = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=IN&time=2012&SEX=0');
   vm.govtResponse = govtResource.query();
   console.log(vm.govtResponse);
}]);
