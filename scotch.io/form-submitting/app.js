// define angular module/app
var app = angular.module('app', []);

/*
 $http inside controllers: Ideally, you would move the $http request
 outside of the controller and into a service.
 This is just for demonstration purposes and we’ll do a write-up on services soon.
 */
// create angular controller and pass in $scope and $http
app.controller('MainController', function ($scope, $http) {

    // create a blank object to hold our form information
    // $scope will allow this to pass between controller and view
    $scope.formData = {};

    $scope.processForm = function () {
        $http.post('/api/process', $scope.formData)
            .success(function (data) {
                // do something for UI part
                console.log(data);
            })
            .error(function (error) {
                // testing data
                $scope.message = 'Error posting form data';
                $scope.errorName = 'Invalid name';
                $scope.errorSuperhero = 'Invalid errorSuperhero';
            });
    };

    // example when customizing the post request
    $scope.processForm2 = function () {
        $http({
            method: 'POST',
            url: '/api/process',
            data: $.param($scope.formData), // pass in the form data
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
        })
            .success(function (data) {

            });
    };

});