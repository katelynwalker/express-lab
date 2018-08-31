const items = {
    template:
            `<form>
            <input placeholder="Product">
            <input placeholder="Price">
            <input placeholder="Quantity">
            <button type="submit">Add to Cart</button>
            </form>
            <section ng-repeat="item in $ctrl.itemList track by $index">
            <p>{{ item.product }}</p>
            <p>{{ item.price }}</p>
            <p>{{ item.quantity }}</p>
            <button type="submit">X</button>
            </section>`         ,
    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getAllItems().then((response) => {
            vm.itemList = response;
            console.log(response);
        })
       
    }]
}



angular
    .module("app")
    .component("items", items);

    

