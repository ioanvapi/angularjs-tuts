app.factory('customersFactory', function ($http, appSettings) {
    var factory = {};

    factory.getCustomers = function () {
        return appSettings.customers;
        //return $http.get('/JumpStart/customers')
    };

    factory.getOrders = function () {
        var orders = [];
        var customers = appSettings.customers;
        for (var i = 0, len = customers.length; i < len; i++) {
            if (customers[i].orders) {
                for (var j = 0, ordersLen = customers[i].orders.length; j < ordersLen; j++) {
                    orders.push(customers[i].orders[j]);
                }
            }
        }
        return orders;
    };

    factory.getCustomer = function (customerId) {
        var data = {};
        var customers = appSettings.customers;
        for (var i = 0, len = customers.length; i < len; i++) {
            if (customers[i].id == customerId) {
                data = customers[i];
                break;
            }
        }
        return data;
    };

    return factory;
});