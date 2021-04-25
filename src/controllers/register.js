const express = require("express");
const RegisterController = express.Router();

RegisterController.get("/", (req, res) => {
	res.render("pages/register");
});

RegisterController.post("/", (req, res) => {
	res.render("pages/register");
});
module.exports = RegisterController;
