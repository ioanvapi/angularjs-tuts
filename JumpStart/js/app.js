var app = angular.module('customersApp', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'CustomersController',
            templateUrl: 'views/Customers.html'
        })
        .when('/orders/:customerId',
        {
            controller: 'OrdersController',
            templateUrl: 'views/Orders.html'
        })
        .when('/orders',
        {
            controller: 'AllOrdersController',
            templateUrl: 'views/AllOrders.html'
        })
        .otherwise({redirectTo: '/'});
});