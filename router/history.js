const express = require("express");
const historyList = require("../model/history");
const router = express.Router();

const history = require("../model/history");

router.get("/list", function (req, res) {
	res.json(historyList);
});

module.exports = router;
