"use strict";
function CartService($http) {
    const vm = this;
    vm.getAllItems = () => {
        return $http({
            url:"/component",
            method:"GET",
        }).then((response) => {
            vm.cartList = response.data;
            return vm.cartList;
        })
    };
}


angular
  .module("app")
  .service("CartService", CartService);




