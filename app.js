var angularApp = angular.module('governmentApp', ['ngResource','ngRoute']);












angularApp.controller("mainController",function($resource){
  var vm=this;
  vm.getInfo = function(){
    console.log(vm.cityName);
    var govResource = $resource('http://api.openweathermap.org/data/2.5/weather',
      {q:vm.cityName,appid:'27d43832d2a4adcb97fcbfa23db130aa'});
    vm.weather = weatherResource.get();
   }
});
