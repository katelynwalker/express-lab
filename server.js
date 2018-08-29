"use strict";
const express = require("express");
const app = express();
const items = require("./routes/items");

app.use(express.static("./public"));
app.use(express.json());
app.use("/", items);

const port = 6000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});






