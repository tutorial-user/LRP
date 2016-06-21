var app = angular.module('portal', []);


app.controller("projectsListCtrl", function($scope, $http){
  $http.get("projects.php").success(function(data){
    $scope.listOfProjects = data;
  })
});


app.controller('controllerApp', function($scope, $http){
  $scope.insertDatabase = function(){
    var request = $http({
            method: "post",
            url: "register.php",
            data: {
                title: $scope.title,
                description: $scope.description,
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }
});
