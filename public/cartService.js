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

    vm.addItem = (items) => {
        return $http({
            url:"/items/all",
            method:"POST",
            data: {
                product: items.product,
                price: items.price,
                quantity: items.quantity
            }
        }).then((response) => {
            vm.itemList = response.data;
            return vm.response.data;
        })
    };

    vm.removeItem = () => {
        return $http({
            url:"/items:id",
            method:"DELETE",
        }).then((response) => {
            vm.itemList = response.data;
            return vm.itemList;
        })
    };

    vm.updateItem = () => {
        return $http({
            url:"/items:id",
            method:"PUT",
            data: {
                quantity: items.quantity
            }
        }).then((response) => {
            vm.itemList = response.data;
            return vm.response.data;
        })
    };
}



  

angular
  .module("app")
  .service("CartService", CartService);




