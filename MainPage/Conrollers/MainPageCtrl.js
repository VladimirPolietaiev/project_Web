app.controller("MainPageCtrl", function ($scope,DataService) {

    $scope.items = getItemsFromService();
 
    function getItemsFromService() {
        return DataService.getItems();
    }
});
