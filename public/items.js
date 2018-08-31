const items = {
    template:`
            <form class="new">
            Add A New Item:
            <input ng-model="$ctrl.newItem.product" placeholder="Product">
            <input ng-model="$ctrl.newItem.price" placeholder="Price">
            <input ng-model="$ctrl.newItem.quantity" placeholder="Quantity">
            <button ng-click="$ctrl.addItem($ctrl.newItem)">Add to Cart</button>
            </form>
            <section class="item" ng-repeat="item in $ctrl.itemList track by $index">
            <p class="list-item"><span id="product">Product:</span>{{ item.product }}  <button ng-click="$ctrl.removeItem($ctrl.itemList[$index].id);">X</button></p>
            <p class="list-item"><span id="price">Price: $ </span>{{ item.price }}</p>
            <p class="list-item"><span id = "qty">Quantity:</span>{{ item.quantity }}</p>
            <form>
            <input ng-model="$ctrl.newItem.quantity" placeholder="Change qty">
            <button ng-click="$ctrl.updateItem($ctrl.newItem, $ctrl.itemList[$index].id)">Update</button>
            </section>`,       
    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getAllItems().then((response) => {
            vm.itemList = response;
            console.log(response);
        })
        
       vm.removeItem  = (index) => {
           CartService.removeItem(index).then((response => {
               vm.itemList = response;
               console.log(response);
           }))
       }
       vm.addItem = (items) => {
        CartService.addItem(items).then((response => {
            vm.itemList = response;
            console.log(response);
        }))
            
       }
       vm.updateItem = (item, index) => {
        CartService.updateItem(item, index).then((response) => {
            vm.itemList = response;
            console.log(response);
        })
       }
    }]
}



angular
    .module("app")
    .component("items", items);

    

