"use strict";
function CartService($http) {
    const vm = this;
    vm.getAllItems = () => {
        return $http({
            url:"/items/all",
            method:"GET",
        }).then((response) => {
            vm.itemList = response.data;
            console.log(vm.itemList)
            return vm.itemList;
        })
    };

    vm.addItem = () => {
        return $http({
            url:"/items",
            method:"POST",
        }).then((response) => {
            vm.itemList = response.data;
            return vm.itemList;
        })
    };

    vm.removeItem = () => {
        return $http({
            url:"/items",
            method:"DELETE",
        }).then((response) => {
            vm.itemList = response.data;
            return vm.itemList;
        })
    };

    vm.updateItem = () => {
        return $http({
            url:"/items",
            method:"PUT",
        }).then((response) => {
            vm.itemList = response.data;
            return vm.itemList;
        })
    };
}



  

angular
  .module("app")
  .service("CartService", CartService);




