"use strict";
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send({
        data: 'Some JSON'
    });
});
exports.WelcomeController = router;
