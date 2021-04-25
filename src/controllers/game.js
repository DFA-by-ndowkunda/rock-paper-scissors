const express = require("express");
const Computer = require("../computer");
const Game = require("../game");
const GameController = express.Router();

GameController.post("/", (req, res) => {
	req.app.locals.player = require("../player");
	let game = new Game();
	let computer = new Computer();
	let computerChoice = computer.getWeapon();
	let playerChoice = req.body.playerChoice;
	game.addWeapon(playerChoice);
	game.addWeapon(computerChoice);
	res.render("pages/game", {
		username: req.app.locals.player.username,
		playerWeapon: playerChoice,
		computerWeapon: computerChoice,
		result: game.checkWeapons(),
	});
});

module.exports = GameController;
