const express = require("express");
const ChoicesController = express.Router();

ChoicesController.post("/", (req, res) => {
	res.render("pages/choices", { playerName: req.body.playerName });
});

module.exports = ChoicesController;
