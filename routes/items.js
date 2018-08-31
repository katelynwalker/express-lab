"use strict";

const express = require("express");
const items = express.Router();
const pool = require("../pg-connection-pool");



items.get("/items/all", (req, res) => {
    pool.query("Select * from ShoppingCart").then((results) => {
        console.log(results.rows);
        res.send(results.rows);
    });
});


items.post("/items/all", (req, res) => {
    console.log(req.body);
    pool.query("Insert Into ShoppingCart(product, price, quantity) Values($1::text, $2::float, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
      pool.query("Select * From ShoppingCart").then((results) => {
        console.log(results.rows);
        res.send(results.rows);
      });
    }); 
  });
  
  items.put("/items/:id", (req, res) => {
    pool.query("Update ShoppingCart set quantity=$1::int Where id=$2::int", [req.body.quantity, parseInt(req.params.id)]).then(() => {
      pool.query("Select * From ShoppingCart").then((results) => {
        console.log(results.rows);
        res.send(results.rows);
      });
    });
  });


  
    items.delete("/items/:id", (req, res) => {
    pool.query("Delete From ShoppingCart Where id=$1::int", [parseInt(req.params.id)]).then(() => {
      pool.query("Select * From ShoppingCart").then((results) => {
        console.log(results.rows);
        res.send(results.rows);
      });
    });
  });



module.exports = items;
