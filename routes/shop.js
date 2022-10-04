const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");
const { appendFile } = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", { prods: adminData.products, path: "/" });
});

module.exports = router;
