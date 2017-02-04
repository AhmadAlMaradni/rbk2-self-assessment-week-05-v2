angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('Counter', function(){
    var fizzz = function (counter){
      if(counter % 3 === 0 && counter % 5 === 0){
        return 'FIZZBUZZ'
      } else if(counter % 3 === 0){
        return 'FIZZ'
      } else  if(counter % 5 === 0){
        return 'BUZZ'
      }else {
        return 'click'
      }
    }

    var fozzz = function (counter){
      if(counter % 4 === 0 && counter % 6 === 0){
        return 'FOZZBAZZ'
      } else if(counter % 4 === 0){
        return 'FOZZ'
      } else  if(counter % 6 === 0){
        return 'BAZZ'
      }else {
        return 'click'
      }
    }

    return {
      fizzz : fizzz ,
      fozzz : fozzz
    }

  })
  .controller('fizzbuzzCtrl', function($scope , Counter){
    $scope.counter = 0;
    $scope.display = 'click';
     $scope.increment= function(){
      $scope.counter ++;
      $scope.display = Counter.fizzz($scope.counter)
     }
  })

  .controller('fozzbazzCtrl', function($scope , Counter){
    $scope.counter = 0;
    $scope.display = 'click';
    $scope.increment= function(){
      $scope.counter ++;
      $scope.display = Counter.fozzz($scope.counter)
     }
  });
