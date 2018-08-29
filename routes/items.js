"use strict";

const express = require("express");
const items = express.Router();

const itemList = [
    {
        id:1,
        product:"Avocados",
        price:2,
        quantity:3,
    },
    {
        id:2,
        product:"Ice Cream",
        price:4,
        quantity:1,
    },
    {
        id:3,
        product:"Hot Sauce",
        price:2,
        quantity:1,
    },
    {
        id:4,
        product:"Cherries",
        price:3,
        quantity:1,
    }


];

items.get("/items", (req, res) => {
    res.send(itemList);
})

// let idCount = itemList.length
// item.post("/items", (req, res) => {
//     itemList.push({
//         id: req.body.id,
//         product: req.body.product,
//         price: req.body.price,
//         quantity: req.body.quantity,
//     });
//     res.send(itemList);

// items.put("/items/:id", (req, res) => {
//     let count = 0;
//     for (let item in itemList) {
//         if (item.id == req.params.id) {
//             itemList.splice(count, 1, req.body);
//         }
//         count++;
//     }
//     res.send(itemList);
// });
// items.delete("/items/:id", (req, res) => {
//     let count = 0;
//     for (let item of itemList) {
//         if (item.id == req.params.id) {
//             itemList.splice(count, 1);
//         }
//         count++;
//     }
//     res.send(itemList);
// })

module.exports = items;
