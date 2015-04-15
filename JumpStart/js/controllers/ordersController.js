app.controller('OrdersController', function($scope, $routeParams, customersFactory) {
    var customerId = parseInt($routeParams.customerId);

    $scope.customer = customersFactory.getCustomer(customerId);

});