const express = require("express");
const ChoicesController = express.Router();

ChoicesController.post("/", (req, res) => {
	req.app.locals.player = require("../player");
	req.app.locals.player.username = req.body.username;
	res.render("pages/choices", {
		username: req.app.locals.player.username,
	});
});

module.exports = ChoicesController;
