var express = require("express");
var router = express.Router();
var UserModel = require("../models/user");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authService = require("../services/auth");

var ShoeModel = require('../models/shoe');

/* create new inventory item */
router.post('/receiving', function(req, res, next) {
    console.log(req.body);
    ShoeModel.create(
        {
            sku: req.body.sku,
            asin: req.body.asin,
            department: req.body.department,
            type: req.body.type,
            brand: req.body.brand,
            model: req.body.model,
            size: req.body.size,
            width: req.body.width,
            color: req.body.color,
            shipWeight: req.body.shipWeight,
            shipWidth: req.body.shipWidth,
            shipHeight: req.body.shipHeight,
            shipDepth: req.body.shipDepth,
            priceList: req.body.priceList,
            priceRetail: req.body.priceRetail,
            priceSavings: req.body.priceSavings,
            percentSavings: req.body.percentSavings,
            priceWholesale: req.body.priceWholesale
        },
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json("Item successfully created");
            }
        }
    );
});

/* GET home page. */
router.get("/receiving", function(req, res, next) {
  res.send("hello!");
});

router.get("/validateToken", authService.verifyUser, function(req, res, next) {
    // if there is a token we return true
    // this only happens if verifyUser is passed successfully (validates token)
    res.json(true);
  });

/*  */

module.exports = router;
