const items = {
    template:`
            <p ng-repeat="item in $ctrl.itemList track by $index"> {{ item }}</p>`,
    controller: function($http) {
        const vm = this;
        vm.getItems = () => {
            $http({
                url:"/items",
                method: "GET"
            }).then((response) => {
                vm.itemList = response.data;
            });
        }
        getItems();
    }
}



angular
    .module("app")
    .component("items", items);

    

