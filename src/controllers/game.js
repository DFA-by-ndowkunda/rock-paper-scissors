const express = require("express");
const Computer = require("../computer");
const Player = require("../player");
const Game = require("../game");
const GameController = express.Router();

GameController.post("/", (req, res) => {
	let game = new Game();
	let computer = new Computer();
	let player = new Player();
	let computerChoice = computer.getWeapon();
	let playerChoice = req.body.playerChoice;
	game.addWeapon(playerChoice);
	game.addWeapon(computerChoice);
	res.render("pages/game", {
		username: player.username,
		playerWeapon: playerChoice,
		computerWeapon: computerChoice,
		result: game.checkWeapons(),
	});
});

module.exports = GameController;
