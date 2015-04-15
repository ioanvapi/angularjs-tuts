app.controller('AllOrdersController', function ($scope, customersFactory) {

    $scope.orders = customersFactory.getOrders();
    $scope.ordersTotal = 0;

    for (var i = 0, len = $scope.orders.length; i < len; i++) {
        $scope.ordersTotal += $scope.orders[i].total;
    }

    $scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';

});

