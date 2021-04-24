const weapons = require("./weapons.js");
class Game {
	constructor() {
		this.players = [];
	}
	addPlayer(player) {
		this.players.push(player);
	}

	isDraw() {
		if (this.players[0].weapon === this.players[1].weapon) {
			return true;
		}
	}
	isRock() {
		if (
			this.players[0].weapon === weapons.rock &&
			this.players[1].weapon === weapons.scissors
		) {
			return true;
		}
	}
	isPaper() {
		if (
			this.players[0].weapon === weapons.paper &&
			this.players[1].weapon === weapons.rock
		) {
			return true;
		}
	}
	isScissors() {
		if (
			this.players[0].weapon === weapons.scissors &&
			this.players[1].weapon === weapons.paper
		) {
			return true;
		}
	}
	checkWeapons() {
		if (this.isDraw()) {
			return "draw";
		}
		if (this.isRock() || this.isPaper() || this.isScissors()) {
			return "player wins";
		} else {
			return "player lose";
		}
	}
}
module.exports = Game;
