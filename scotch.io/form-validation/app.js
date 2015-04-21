var app = angular.module('app', []);

app.controller('MainController', function ($scope) {

    $scope.submitted = false;

    $scope.submitForm = function (isValid) {

        $scope.submitted = true;

        if (isValid) {
            alert('our form is ok');
        } else {
            alert('our form is NOT ok');
        }
    };
});