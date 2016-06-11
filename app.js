var angularApp = angular.module('governmentApp', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider){
  $routeProvider

  .when ('/',
  {
    templateUrl: 'list/main.html',
    controller: 'GovernmentController',
    controllerAs: 'hm'
  })

  .when ('/percent',
  {
    templateUrl: 'list/percentage.html',
    controller: 'PercentController',
    controllerAs: 'pc'
  })
  });


angularApp.controller("GovernmentController",['$resource','$filter',function($resource,$filter){
  var vm=this;
    vm.getInfo = function(){
      console.log(this)
      var govtResource = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&SEX=0');
      vm.govtResponse = govtResource.query({FIPS:vm.country,time:vm.year,key:'099b6855b62209b10274a5d6cec26395c298f8eb'});
      console.log(vm.govtResponse);
    }
}]);

angularApp.controller("PercentController",['$resource','$filter',function($resource,$filter){
  var vm=this;

      vm.getpercent = function(){
        console.log("hello");
        var percentResource = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&SEX=0');
        vm.percentResponse = percentResource.query({FIPS:vm.country,time:vm.year,key:'099b6855b62209b10274a5d6cec26395c298f8eb'});
        console.log(vm.country);
        console.log(vm.percentResponse);
      }


}]);
