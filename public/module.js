"use strict";

angular
    .module("app", ["ngRoute"])
    .config(($routeProvider) => {
        $routeProvider  
            .when("/items", {
                template:"<items></items>"
            })
    });




