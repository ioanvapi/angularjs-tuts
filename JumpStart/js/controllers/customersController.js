app.controller('CustomersController', function ($scope, customersFactory, appSettings) {

    $scope.customers = customersFactory.getCustomers();
    $scope.appSettings = appSettings;

    $scope.deleteCustomer = function (customerId) {
        var customers = $scope.customers;

        for (var i = 0, len = customers.length; i < len; i++) {
            if (customers[i].id === customerId) {
                $scope.customers.splice(i, 1);
                break;
            }
        }
    };

});