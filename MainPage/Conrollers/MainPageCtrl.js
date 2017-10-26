app.controller("MainPageCtrl", function ($scope,DataService) {

    $scope.items = getItemsFromService();
    $scope.statusItem = anyName;
 
    function getItemsFromService() {
        return DataService.getItems();
    }
    
    function anyName(myFuckingItem) {
        console.log(myFuckingItem)
        if (myFuckingItem.Status == 'Declined'){
            return true;
        }
    }
});
